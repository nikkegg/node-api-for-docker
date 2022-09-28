This a simple Node API which I use to practice dockersing things locally. Has corresponding front-end app and postgress DB,
To run locally do:
`docker build -t api:api .`
Followed by:
`docker run --rm -p $PORT:1234 --name $NAME -v logs:/api/logs -v $(pwd):/api -v /api/node_modules`
