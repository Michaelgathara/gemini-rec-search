# Build python dependencies
FROM python:3.10.12-slim as pybuilder

RUN apt update && apt install -y uvicorn gcc g++
RUN python -m pip --no-cache-dir install pdm
RUN pdm config python.use_venv false

WORKDIR /project/app

# Copy pyproject.toml and pdm.lock to install dependencies
COPY pyproject.toml pdm.lock /project/app/
RUN pdm install

# Copy your application code
COPY ./api /project/app/api

RUN ls -R /project

# Create final image
FROM python:3.10.12-slim

RUN apt-get update && apt-get install -y wget gnupg supervisor
RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -y google-chrome-stable

ENV PYTHONPATH=/project/pkgs

# Copy dependencies and binaries from builder stage
COPY --from=pybuilder /usr/local/lib/python3.10/site-packages /usr/local/lib/python3.10/site-packages
COPY --from=pybuilder /usr/local/bin /usr/local/bin

# Copy the application files from builder stage
COPY --from=pybuilder /project/app /project/

EXPOSE 8000
WORKDIR /project/

CMD ["pdm", "run", "python", "-m", "uvicorn", "api.chrome_ext_thon:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]
