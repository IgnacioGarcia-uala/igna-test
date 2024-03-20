'use client'

export default function Error({
    error,
    reset
}) {
  return (
    <div>
        <h2>Ups</h2>
        <p>{error.message}</p>
    </div>
  )
}
