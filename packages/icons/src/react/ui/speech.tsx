import type { Icon } from './types'

export const IconSpeech: Icon = ({
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
      data-slot='icon-ui-speech'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M13.9 10.3a4.75 4.75 0 1 1-9.5 0 4.75 4.75 0 0 1 9.5 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M16.51 22.55H1.78c0-4.14 3.3-7.5 7.37-7.5a7.43 7.43 0 0 1 7.36 7.5'
        fill='currentColor'
      />
      <path
        d='M13.9 10.3a4.73 4.73 0 0 1-4.75 4.75 4.75 4.75 0 1 1 4.74-4.75'
        stroke='currentColor'
      />
      <path d='M16.5 22.4a7.36 7.36 0 0 0-14.72 0' stroke='currentColor' />
      <path d='M18.06 11s.78-1.52.22-3.63c-.5-1.9-1.97-2.9-1.97-2.9' stroke='currentColor' />
      <path d='M21.71 11.9s1.29-2.38.39-5.8C21.32 3.2 19 1.72 19 1.72' stroke='currentColor' />
    </svg>
  )
}
