FROM ruby:2.6.5-alpine

COPY . /app
WORKDIR /app

COPY Gemfile Gemfile.lock ./

ENV RAILS_ENV production

RUN apk update && apk upgrade && \
    apk add ruby ruby-json ruby-io-console ruby-bundler ruby-irb ruby-bigdecimal tzdata && \
    apk add curl-dev ruby-dev build-base libffi-dev && \
    apk add build-base libxslt-dev libxml2-dev ruby-rdoc mysql-dev &&  \
    gem install bundler && bundle install 
# --deployment --without development test

COPY ./entrypoint.sh /entrypoint.sh

EXPOSE 3000
ENTRYPOINT ["sh", "/entrypoint.sh"]