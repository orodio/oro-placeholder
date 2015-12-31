import { bob } from "./index"
import { equal } from "assert"

describe("index", () => {
  describe("#bob", () => {

    it("bob(1) => 1", () => {
      equal(bob(1), 1)
    })

    it("bob(2) => 4", () => {
      equal(bob(2), 4)
    })

    it("bob(3) => 9", () => {
      equal(bob(3), 9)
    })

  })
})
