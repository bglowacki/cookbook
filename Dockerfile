FROM bglowacki/ruby:2.2.2
MAINTAINER Bartek Glowacki

RUN mkdir /usr/app
WORKDIR /usr/app

COPY Gemfile /usr/app/
COPY Gemfile.lock /usr/app/
COPY package.json /usr/app/

RUN npm install -g karma

RUN gem install bundler && \
    bundle install

RUN npm install

#install dockerize
RUN wget https://github.com/jwilder/dockerize/releases/download/v0.2.0/dockerize-linux-amd64-v0.2.0.tar.gz && \
    tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.2.0.tar.gz

COPY . /usr/app

RUN npm run build
RUN bundle exec rake assets:precompile

CMD  foreman start