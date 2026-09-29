import type { Icon } from './types'

export const IconDumbbell: Icon = ({
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
      data-slot='icon-ui-dumbbell'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='15.4'
        y='3.58'
        width='3.64'
        height='7.11'
        rx='1.82'
        transform='rotate(-45 15.4 3.58)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='3.64'
        height='7.11'
        rx='1.82'
        transform='scale(-1 1)rotate(45 -20.37 3.38)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='10.62'
        y='5.63'
        width='4.83'
        height='10.97'
        rx='2'
        transform='rotate(-45 10.62 5.63)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='4.83'
        height='10.97'
        rx='2'
        transform='scale(-1 1)rotate(45 -15.63 -1.49)'
        fill='currentColor'
      />
      <path
        d='M16.65 4.83a1.8 1.8 0 0 1 0-2.51l.04-.03a1.8 1.8 0 0 1 2.57 0l2.45 2.45c.71.71.71 1.86 0 2.57l-.03.04c-.7.69-1.82.69-2.51 0'
        stroke='currentColor'
      />
      <path
        d='M4.83 16.65a1.8 1.8 0 0 0-2.51 0l-.03.04a1.8 1.8 0 0 0 0 2.57l2.45 2.45c.71.71 1.86.71 2.57 0l.04-.03c.69-.7.69-1.82 0-2.51'
        stroke='currentColor'
      />
      <path
        d='m16.6 4.78-.86-.86c-.27-.27-.4-.41-.54-.5a2 2 0 0 0-2.33 0c-.13.09-.27.23-.54.5-.28.27-.41.41-.51.54a2 2 0 0 0 0 2.33c.1.14.23.27.5.55l4.34 4.33c.28.28.41.41.55.51a2 2 0 0 0 2.33 0c.13-.1.27-.23.54-.5.27-.28.41-.42.5-.55a2 2 0 0 0 0-2.33 5 5 0 0 0-.5-.54l-.86-.87'
        stroke='currentColor'
      />
      <path
        d='m4.72 16.54-.8-.8c-.27-.27-.41-.4-.5-.54a2 2 0 0 1 0-2.33c.09-.13.23-.27.5-.54.27-.28.41-.41.54-.51a2 2 0 0 1 2.33 0c.14.1.27.23.55.5l4.33 4.34c.28.28.41.41.51.55a2 2 0 0 1 0 2.33c-.1.13-.23.27-.5.54-.28.27-.42.41-.55.5a2 2 0 0 1-2.33 0 5 5 0 0 1-.54-.5l-.84-.84'
        stroke='currentColor'
      />
      <path
        d='M14.66 9.67c-1.33.4-2.1.87-3.11 1.88a6.5 6.5 0 0 0-1.88 3.11'
        stroke='currentColor'
      />
      <path d='m21.83 2.45-1.2 1.2' stroke='currentColor' />
      <path d='m2.45 21.83 1.2-1.2' stroke='currentColor' />
    </svg>
  )
}
