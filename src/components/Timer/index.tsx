import { useEffect, useMemo, useState } from "react"
import { Button } from "../Button"
import { Container, Text, Title, CircularProgressbar } from "./styles"
import { BsPlay, BsPause } from "react-icons/bs"
import { TimerProps } from "../../@types/TimerProps"

const INITIAL_TIME_IN_SECONDS = 25 * 60 // 25 minutes

export default function Timer({
  initialTime = INITIAL_TIME_IN_SECONDS,
}: TimerProps) {
  const [count, setCount] = useState(initialTime)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        setCount(state => state - 1)
      }, 1000)

      if (count === 0) {
        setActive(false)
        clearInterval(interval)
        setCount(INITIAL_TIME_IN_SECONDS)
      }

      return () => {
        clearInterval(interval)
      }
    }
  }, [active, count])

  const minutes = useMemo(() => Math.floor(count / 60), [count])
  const seconds = useMemo(() => count % 60, [count])
  const progress = useMemo(() => count / 15, [count])
  const activeIcon = useMemo(
    () => (active ? <BsPause size={32} /> : <BsPlay size={32} />),
    [active]
  )

  return (
    <Container>
      <Title>Let&apos;s focus for</Title>
      <CircularProgressbar value={progress} strokeWidth={5}>
        <Text>
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </Text>
      </CircularProgressbar>

      <Button aria-label="Toggle timer" onClick={() => setActive(!active)}>
        {activeIcon}
      </Button>
    </Container>
  )
}
