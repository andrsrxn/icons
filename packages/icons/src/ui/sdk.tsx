import type { Icon } from './types'

export const IconSdk: Icon = ({
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
      data-slot='icon-ui-sdk'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.29 12c0-3.33 0-5-.93-6.11a4 4 0 0 0-.5-.5c-1.12-.94-2.79-.94-6.12-.94H9.26c-3.33 0-5 0-6.11.94a4 4 0 0 0-.5.5C1.7 7 1.7 8.67 1.7 12s0 5 .93 6.11a4 4 0 0 0 .5.5c1.12.94 2.79.94 6.12.94h5.48c3.33 0 5 0 6.11-.94q.29-.23.5-.5c.94-1.11.94-2.78.94-6.11'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M9.26 19.55h5.48c3.33 0 5 0 6.11-.94a4 4 0 0 0 .5-.5c.94-1.11.94-2.78.94-6.11v0c0-3.33 0-5-.93-6.11a4 4 0 0 0-.5-.5c-1.12-.94-2.79-.94-6.12-.94H9.26c-3.33 0-5 0-6.11.94a4 4 0 0 0-.5.5C1.7 7 1.7 8.67 1.7 12v0c0 3.33 0 5 .93 6.11a4 4 0 0 0 .5.5c1.12.94 2.79.94 6.12.94'
        stroke='currentColor'
      />
      <path
        d='M10.6 13.93v-3.86c0-.41 0-.62.15-.76.16-.15.34-.14.7-.13 1.1.04 2.9.46 2.9 2.82s-1.8 2.78-2.9 2.82c-.36.01-.54.02-.7-.13s-.15-.35-.15-.76'
        stroke='currentColor'
      />
      <path
        d='M8.09 9.92c-.33-.3-.91-.72-1.75-.72-.83 0-1.75.46-1.75 1.44 0 2.1 3.5.43 3.5 2.57 0 1-.9 1.54-1.75 1.54s-1.43-.27-1.82-.86'
        stroke='currentColor'
      />
      <path d='M16.64 9.17v5.65' stroke='currentColor' />
      <path
        d='m19.44 9.19-1.27 1.55c-.5.6-.74.9-.74 1.26s.25.66.74 1.27l1.27 1.55'
        stroke='currentColor'
      />
    </svg>
  )
}
