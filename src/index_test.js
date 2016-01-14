import assert from "assert"

import {
  fillMurray,
  hoff,
  bacon,
  bear,
  cage,
  steven,
  kitten,
} from "./index"

var zip = (a, b) => a.map((d,i) => ([d, b[i]]))

var eq = (msg, a,b) => it(msg, () => { assert.equal(a,b) })

var seed = [
  {},
  { width:100 },
  { height:100 },
  { secure:false },
  { g:true },
  { width:100, height:100, secure:false, g:true },
]

var test = fn => ([obj, expect]) => eq(expect, fn(obj), expect)
var suit = (msg, fn, ...exs) => describe(msg, () => zip(seed, exs).forEach(test(fn)))

describe("index", () => {
  suit("fillMurray", fillMurray,
    "https://fillmurray.com/200/200",
    "https://fillmurray.com/100/200",
    "https://fillmurray.com/200/100",
    "http://fillmurray.com/200/200",
    "https://fillmurray.com/g/200/200",
    "http://fillmurray.com/g/100/100",
  )

  suit("hoff", hoff,
    "http://place-hoff.com/200/200",
    "http://place-hoff.com/100/200",
    "http://place-hoff.com/200/100",
    "http://place-hoff.com/200/200",
    "http://place-hoff.com/200/200",
    "http://place-hoff.com/100/100",
  )

  suit("bacon", bacon,
    "https://baconmockup.com/200/200",
    "https://baconmockup.com/100/200",
    "https://baconmockup.com/200/100",
    "http://baconmockup.com/200/200",
    "https://baconmockup.com/200/200",
    "http://baconmockup.com/100/100",
  )

  suit("bear", bear,
    "https://placebear.com/200/200",
    "https://placebear.com/100/200",
    "https://placebear.com/200/100",
    "http://placebear.com/200/200",
    "https://placebear.com/g/200/200",
    "http://placebear.com/g/100/100",
  )

  suit("cage", cage,
      "http://placecage.com/200/200",
      "http://placecage.com/100/200",
      "http://placecage.com/200/100",
      "http://placecage.com/200/200",
      "http://placecage.com/g/200/200",
      "http://placecage.com/g/100/100",
  )

  suit("steven", steven,
    "http://stevensegallery.com/200/200",
    "http://stevensegallery.com/100/200",
    "http://stevensegallery.com/200/100",
    "http://stevensegallery.com/200/200",
    "http://stevensegallery.com/g/200/200",
    "http://stevensegallery.com/g/100/100",
  )

  suit("kitten", kitten,
    "http://placekitten.com/200/200",
    "http://placekitten.com/100/200",
    "http://placekitten.com/200/100",
    "http://placekitten.com/200/200",
    "http://placekitten.com/g/200/200",
    "http://placekitten.com/g/100/100",
  )
})
