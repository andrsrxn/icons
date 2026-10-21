import type { Icon } from './types'

export const IconIgloo: Icon = ({
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
      data-slot='icon-ui-igloo'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M15.31 19.77H6c-1.16 0-1.73 0-2.2-.16a3 3 0 0 1-1.89-1.88c-.15-.47-.15-1.04-.15-2.2v-3.31a8 8 0 0 1 7.99-8h.77c3.3 0 6.15 2.28 6.89 5.5'
        stroke='currentColor'
      />
      <path
        d='M12.3 14.72v3.05c0 .47 0 .7.06.9.14.5.54.91 1.06 1.05.19.05.42.05.89.05h5.93c.47 0 .7 0 .9-.05a1.5 1.5 0 0 0 1.05-1.06c.05-.19.05-.42.05-.9v-3.04a4.97 4.97 0 0 0-9.93 0'
        stroke='currentColor'
      />
      <path d='M15.48 19.77V14.9a1.8 1.8 0 0 1 3.59 0v4.88' stroke='currentColor' />
      <path d='M16.74 9.61H2.27' stroke='currentColor' />
      <path d='M6.31 9.61v5.09' stroke='currentColor' />
      <path d='M9.53 4.52v5.09' stroke='currentColor' />
      <path d='M8.41 14.7v5.07' stroke='currentColor' />
      <path d='M12.3 14.7H1.94' stroke='currentColor' />
      <path
        opacity='.2'
        d='M10.72 4.23c3.2 0 5.97 2.2 6.69 5.32L14 10.9l-1.88 3.99.59 4.87H5.34c-.54 0-.81 0-1.04-.03a3 3 0 0 1-2.5-2.51c-.04-.23-.04-.5-.04-1.05v-3.92c0-4.43 3.6-8.03 8.03-8.03z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='7.06'
        height='3.59'
        rx='1.79'
        transform='matrix(0 -1 -1 0 19.07 20.15)'
        fill='currentColor'
      />
    </svg>
  )
}
