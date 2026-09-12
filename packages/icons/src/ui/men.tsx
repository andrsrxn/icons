import type { Icon } from './types'

export const IconMen: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-men'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='12' cy='4.17' r='2.44' fill='currentColor' />
      <path
        opacity='.2'
        d='M7.13 12.04c0-1.42 0-2.12.44-2.56s1.14-.44 2.56-.44h3.74c1.42 0 2.12 0 2.56.44s.44 1.14.44 2.56v2.66a1.5 1.5 0 0 1-.92 1.23l-.3.1-.31.1c-.5.22-.85.69-.9 1.24q-.03.09-.02.32v2.18c0 .84 0 1.26-.16 1.58a1.5 1.5 0 0 1-.66.66c-.32.16-.74.16-1.57.16s-1.26 0-1.58-.16a1.5 1.5 0 0 1-.66-.66c-.16-.32-.16-.74-.16-1.58v-2.15l-.01-.36c-.06-.54-.4-1-.9-1.22l-.34-.1-.34-.12a1.5 1.5 0 0 1-.9-1.21l-.01-.36z'
        fill='currentColor'
      />
      <circle cx='12' cy='4.17' r='2.44' stroke='currentColor' />
      <path
        d='M7.13 12.04c0-1.42 0-2.12.44-2.56s1.14-.44 2.56-.44h3.74c1.42 0 2.12 0 2.56.44s.44 1.14.44 2.56v2.66a1.5 1.5 0 0 1-.92 1.23l-.3.1-.31.1c-.5.22-.85.69-.9 1.24q-.03.09-.02.32v2.18c0 .84 0 1.26-.16 1.58a1.5 1.5 0 0 1-.66.66c-.32.16-.74.16-1.57.16s-1.26 0-1.58-.16a1.5 1.5 0 0 1-.66-.66c-.16-.32-.16-.74-.16-1.58v-2.15l-.01-.36c-.06-.54-.4-1-.9-1.22l-.34-.1-.34-.12a1.5 1.5 0 0 1-.9-1.21l-.01-.36z'
        stroke='currentColor'
      />
    </svg>
  )
}
