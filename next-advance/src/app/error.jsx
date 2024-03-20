'use client';

import React from 'react'

export default function Error({
    error,
    reset
}) {
  return (
    <div>
        <p>Ups</p>
        <p>{error}</p>
    </div>
  )
}
