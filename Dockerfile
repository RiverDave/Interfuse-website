FROM silkeh/clang:latest AS build

# Install the typical development tools for C++, and
# the base OS headers and libraries.
RUN apt-get update && \
  apt-get install -y \
  build-essential \
  cmake \
  curl \
  git \
  python3 \
  linux-libc-dev \
  ninja-build \
  pkg-config \
  tar \
  unzip \
  zip \
  bison \
  libzstd-dev \
  zlib1g-dev \
  libcurl4-openssl-dev \
  libedit-dev \
  autoconf \
  automake \
  autoconf-archive \
  libboost-all-dev \
  nodejs \
  npm


WORKDIR /v/fuse-project

RUN git clone https://github.com/RiverDave/InterfuseLang.git compiler
RUN git clone https://github.com/RiverDave/Interfuse-website.git fuse-site

RUN cd compiler/
RUN ls


# Run the CMake configuration step, setting the options to create
# a statically linked C++ program
#RUN cmake -S /v/fuse-project/compiler -B build -GNinja \
 #-DCMAKE_BUILD_TYPE=DEBUG
#
# # Compile the binary and strip it to reduce its size.
#RUN cmake --build build

WORKDIR /v/fuse-project/compiler/build
RUN cmake .. && make


# # # FROM node:alpine AS node
 WORKDIR /v/fuse-project
 RUN ls
	
#COPY /v/fuse-project/fuse-site/ /n/fuse-site/
#COPY compiler/build/interfuse /n/fuse-site/compiler/interfuse
RUN mkdir /v/fuse-project/fuse-site/compiler
#RUN cp -r /v/fuse-project/fuse-site/* /n/fuse-site/
RUN cp /v/fuse-project/compiler/build/interfuse /v/fuse-project/fuse-site/compiler/
#RUN ls /n/fuse-site/compiler


# NEXT PROJECT STUFF (this ideally should be separated in another stage)
#RUN cp /v/fuse-project/compiler/build/interfuse /v/fuse-project/fuse-site/compiler/interfuse
#ENV PATH=/v/fuse-site/compiler/build:${PATH}
#
WORKDIR /v/fuse-project/fuse-site/
# #
RUN npm install
# #
# ## COPY . .
# #
# # # Initiate production build
RUN npm run build
# #
EXPOSE 8080
CMD ["npm", "start"]


