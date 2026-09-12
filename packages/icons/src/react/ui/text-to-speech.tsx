import type { Icon } from './types'

export const IconTextToSpeech: Icon = ({
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
      data-slot='icon-ui-text-to-speech'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M6.08 6.48v11.05' stroke='currentColor' />
      <path d='M14.33 8.36v7.3' stroke='currentColor' />
      <path d='M22.35 8.36v7.3' stroke='currentColor' />
      <path d='M18.34 5.72V18.3' stroke='currentColor' />
      <path d='M7.91 17.53H4.25' stroke='currentColor' />
      <path
        d='M10.55 7.77a1.3 1.3 0 0 0-1.29-1.29H2.9a1.3 1.3 0 0 0-1.29 1.29'
        stroke='currentColor'
      />
    </svg>
  )
}
