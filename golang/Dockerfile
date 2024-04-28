FROM golang:1.22.2-alpine AS build

WORKDIR /app

COPY ./go.mod .
COPY ./go.sum .

RUN go mod download

COPY lib ./lib
COPY cmd ./cmd
COPY templates ./templates
COPY main.go .

RUN go build -o build/fizzbuzz

FROM scratch

WORKDIR /app

COPY --from=build /app/templates ./templates
COPY --from=build /app/build/fizzbuzz ./build/fizzbuzz

CMD [ "./build/fizzbuzz", "serve" ]