import type { Icon } from './types'

export const IconSequence: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-sequence'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M19.28 6.97c.7 0 1.04 0 1.31-.11q.58-.25.82-.82c.11-.27.11-.62.11-1.31s0-1.05-.11-1.32a1.5 1.5 0 0 0-.82-.82c-.27-.11-.62-.11-1.31-.11h-5.61c-.7 0-1.04 0-1.32.11a1.5 1.5 0 0 0-.81.82c-.12.27-.12.62-.12 1.32 0 .69 0 1.04.12 1.31q.24.58.81.82c.28.11.63.11 1.32.11z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M19.28 21.77c.7 0 1.04 0 1.31-.11q.58-.24.82-.82c.11-.27.11-.62.11-1.31s0-1.05-.11-1.32a1.5 1.5 0 0 0-.82-.82c-.27-.1-.62-.1-1.31-.1h-5.61c-.7 0-1.04 0-1.32.1a1.5 1.5 0 0 0-.81.82c-.12.27-.12.62-.12 1.32s0 1.04.12 1.31q.24.58.81.82c.28.11.63.11 1.32.11z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M4.72 14.37c-.7 0-1.04 0-1.31-.11a1.5 1.5 0 0 1-.82-.82c-.11-.27-.11-.62-.11-1.31s0-1.05.11-1.32c.15-.37.45-.66.82-.82.27-.1.62-.1 1.31-.1h5.61c.7 0 1.04 0 1.32.1q.57.25.81.82c.12.27.12.62.12 1.32s0 1.04-.12 1.31a1.5 1.5 0 0 1-.81.82c-.28.11-.63.11-1.32.11z'
        fill='currentColor'
      />
      <path
        d='M11.42 4.73c0-.7 0-1.05.12-1.32q.24-.57.81-.82c.28-.11.63-.11 1.32-.11h5.6c.7 0 1.05 0 1.32.11q.58.25.82.82c.11.27.11.62.11 1.32v0c0 .69 0 1.04-.11 1.31a1.5 1.5 0 0 1-.82.82c-.27.11-.62.11-1.31.11h-5.61c-.7 0-1.04 0-1.32-.11a1.5 1.5 0 0 1-.81-.82c-.12-.27-.12-.62-.12-1.31'
        stroke='currentColor'
      />
      <path
        d='M11.42 19.53c0-.7 0-1.05.12-1.32q.24-.57.81-.82c.28-.1.63-.1 1.32-.1h5.6c.7 0 1.05 0 1.32.1q.58.25.82.82c.11.27.11.62.11 1.32v0c0 .7 0 1.04-.11 1.31a1.5 1.5 0 0 1-.82.82c-.27.11-.62.11-1.31.11h-5.61c-.7 0-1.04 0-1.32-.11a1.5 1.5 0 0 1-.81-.82c-.12-.27-.12-.62-.12-1.31'
        stroke='currentColor'
      />
      <path
        d='M12.58 12.13c0-.7 0-1.05-.12-1.32a1.5 1.5 0 0 0-.81-.82c-.28-.1-.63-.1-1.32-.1h-5.6c-.7 0-1.05 0-1.32.1a1.5 1.5 0 0 0-.82.82c-.11.27-.11.62-.11 1.32v0c0 .7 0 1.04.11 1.31.15.37.45.67.82.82.27.11.62.11 1.31.11h5.61c.7 0 1.04 0 1.32-.11q.57-.25.81-.82c.12-.27.12-.62.12-1.31'
        stroke='currentColor'
      />
      <path
        d='M6.8 6.98c.9-.9 1.36-1.35 1.5-1.88a2 2 0 0 0 0-1c-.14-.53-.6-.98-1.5-1.88'
        stroke='currentColor'
      />
      <path
        d='M6.8 21.78c.9-.9 1.36-1.35 1.5-1.88a2 2 0 0 0 0-1c-.14-.53-.6-.98-1.5-1.88'
        stroke='currentColor'
      />
      <path
        d='M17.2 14.38c-.9-.9-1.36-1.35-1.5-1.88a2 2 0 0 1 0-1c.14-.53.6-.98 1.5-1.88'
        stroke='currentColor'
      />
      <path d='M2.48 4.6h5.81' stroke='currentColor' />
      <path d='M2.48 19.4h5.81' stroke='currentColor' />
      <path d='M21.52 12h-5.81' stroke='currentColor' />
    </svg>
  )
}
