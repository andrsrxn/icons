import type { Icon } from './types'

export const IconStrokeAlignOutside: Icon = ({
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
      data-slot='icon-ui-stroke-align-outside'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.2 4.24c.06.65.37 1.25.86 1.68l.55.48.26.2a1 1 0 0 0 .37.15h.35c.46 0 .7 0 .87.09a1 1 0 0 1 .54.52c.08.19.08.42.09.88l.2 13.99H11.25c-.9 0-1.34 0-1.63-.27-.29-.28-.31-.72-.37-1.61l-.27-4.5c-.05-.83-.07-1.24-.33-1.51-.27-.27-.68-.3-1.5-.37l-3.48-.27c-.88-.06-1.32-.1-1.58-.39-.27-.28-.27-.72-.27-1.6V5.47c0-.94 0-1.42.3-1.7.29-.3.76-.3 1.7-.3h12.55c.44 0 .8.33.84.77'
        fill='currentColor'
      />
      <path d='m21.16 22.23-.05-15.7' stroke='currentColor' />
      <path d='M22.16 4.47a2.5 2.5 0 0 1-2.49 2.49 2.5 2.5 0 1 1 2.5-2.5' stroke='currentColor' />
      <path d='M1.82 3.47h15.2' stroke='currentColor' />
      <path
        d='M9.44 22.23v-4.79c0-1.88 0-2.82-.59-3.41-.58-.59-1.53-.59-3.41-.59H1.82'
        stroke='currentColor'
      />
      <path
        d='M15.13 22.23v-9.77c0-1.88 0-2.83-.58-3.41-.59-.59-1.53-.59-3.42-.59h-9.3'
        stroke='currentColor'
      />
    </svg>
  )
}
