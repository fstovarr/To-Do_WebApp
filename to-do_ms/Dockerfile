FROM ruby:2.6.3-stretch

COPY . /app
WORKDIR /app

RUN gem install bundler && bundle install --deployment --without development test

ENV RAILS_ENV production

ENTRYPOINT ["sh", "./entrypoint.sh"]