var compress = (...args) =>
  args.reduce((acc,d) => !d ? acc : `${ acc }/${ d }`)

var http = (secure, rest) => `${ secure ? "https" : "http" }://${ rest }`

export var fillMurray = ({
  secure = true,
  g      = false,
  width  = 200,
  height = 200,
}) =>
  compress(
    http(secure, "fillmurray.com"),
    !!g && "g",
    width,
    height,
  )

export var hoff = ({
  width  = 200,
  height = 200,
}) =>
  compress(
    http(false, "place-hoff.com"),
    width,
    height,
  )

export var bacon = ({
  secure = true,
  width  = 200,
  height = 200,
}) =>
  compress(
    http(secure, "baconmockup.com"),
    width,
    height,
  )

export var bear = ({
  secure = true,
  g      = false,
  width  = 200,
  height = 200,
}) =>
  compress(
    http(secure, "placebear.com"),
    !!g && "g",
    width,
    height,
  )

export var cage = ({
  g      = false,
  width  = 200,
  height = 200,
}) =>
  compress(
    http(false, "placecage.com"),
    !!g && "g",
    width,
    height,
  )

export var steven = ({
  g      = false,
  width  = 200,
  height = 200,
}) =>
  compress(
    http(false, "stevensegallery.com"),
    !!g && "g",
    width,
    height,
  )

export var kitten = ({
  g      = false,
  width  = 200,
  height = 200,
}) =>
  compress(
    http(false, "placekitten.com"),
    !!g && "g",
    width,
    height,
  )

var srcs = [
  fillMurray,
  hoff,
  bacon,
  bear,
  cage,
  steven,
]

var rand = arr => arr[~~(Math.random() * arr.length)]

export var src = (opts={}) => rand(srcs)(opts)
