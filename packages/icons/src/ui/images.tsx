import type { Icon } from './types'

export const IconImages: Icon = ({
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
      data-slot='icon-ui-images'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M18.01 13.32c0-2.78 0-4.17-.85-5.05l-.06-.05c-.87-.85-2.26-.85-5.04-.85H7.02c-2.17 0-3.26 0-4.03.53a3 3 0 0 0-.75.76c-.54.77-.54 1.85-.54 4.03 0 1.9 0 2.85.44 3.15a1 1 0 0 0 .53.18c.52.01 1.1-.75 2.23-2.27l.4-.55c.74-.98 1.1-1.47 1.6-1.47s.87.48 1.6 1.45l1.32 1.74c.57.74.85 1.1 1.25 1.16s.78-.21 1.53-.76l.3-.23c.48-.35.72-.53 1-.55h.2c.27.02.5.2.98.55 1.16.85 1.74 1.28 2.22 1.13a1 1 0 0 0 .31-.16c.4-.3.4-1.01.4-2.45z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M5.82 6.34c.1-1.57 1.4-2.8 2.97-2.8h7.5c2.83 0 4.25 0 5.13.88s.88 2.3.88 5.13v3.64c0 .5 0 .75-.11.96-.11.22-.31.36-.72.66l-.54.39c-1.2.86-1.8 1.3-2.3 1.08-.53-.22-.64-.95-.86-2.4l-.65-4.34c-.1-.74-.16-1.11-.41-1.35s-.63-.27-1.38-.34l-4.9-.46H6.8a1 1 0 0 1-1-1.05'
        fill='currentColor'
      />
      <rect x='1.7' y='7.37' width='16.31' height='13.09' rx='3' stroke='currentColor' />
      <path
        d='M5.99 7.3c0-.7 0-1.05.06-1.35A3 3 0 0 1 8.4 3.61c.29-.06.64-.06 1.35-.06h6.55c2.82 0 4.24 0 5.12.87.88.88.88 2.3.88 5.13v3c0 1 0 1.5-.12 1.92a3 3 0 0 1-2.05 2.04c-.4.12-.9.12-1.91.12'
        stroke='currentColor'
      />
      <path
        d='M14.17 10.77a.43.43 0 1 1-.86 0 .43.43 0 0 1 .86 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='m1.88 17.36 3.7-4.72c.63-.8.95-1.2 1.38-1.19s.71.43 1.28 1.26L9.9 15.1c.5.73.75 1.1 1.14 1.13.4.04 1.01-.59 1.67-1.22.52-.5.96-.88 1.3-.89.33 0 .6.24 1.15.72l2.86 2.52'
        stroke='currentColor'
      />
    </svg>
  )
}
