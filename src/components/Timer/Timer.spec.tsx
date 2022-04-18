import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"

import Timer from "./index"

describe("Timer component", () => {
  it("should render title text", () => {
    const { getByText } = render(<Timer />)
    expect(getByText("Let's focus for")).toBeTruthy()
  })

  it("should render 25 minutes", () => {
    const { getByText, getByLabelText } = render(<Timer />)
    expect(getByText("25:00")).toBeTruthy()
    const button = getByLabelText("Toggle timer")
    expect(button).toBeInTheDocument()
  })

  it("should start timer", async () => {
    await act(async () => {
      const { getByText, queryByText, getByLabelText } = render(<Timer />)
      const button = getByLabelText("Toggle timer")
      userEvent.click(button)
      const delay = 2 * 1000 // 2 seconds
      await new Promise(resolve => setTimeout(resolve, delay + 1000))
      expect(queryByText("24:55")).not.toBeTruthy()
      expect(getByText("24:58")).toBeTruthy()
    })
  })

  it("should reset timer", async () => {
    await act(async () => {
      const initialTime = 2 // 2 seconds
      const { getByText, queryByText, getByLabelText } = render(
        <Timer initialTime={initialTime} />
      )
      const button = getByLabelText("Toggle timer")
      userEvent.click(button)
      await new Promise(resolve =>
        setTimeout(resolve, initialTime * 1000 + 1000)
      )
      expect(queryByText("24:55")).not.toBeTruthy()
      expect(getByText("25:00")).toBeTruthy()
    })
  })
})
