import type { Icon } from './types'

export const IconPawPrint: Icon = ({
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
      data-slot='icon-ui-paw-print'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m6.26 14.47 1.46-1.1c1.82-1.36 2.73-2.05 3.76-2.19a4 4 0 0 1 1.08 0c1.03.14 1.94.83 3.77 2.2l1.45 1.1a3.52 3.52 0 0 1-3.3 6.12l-1.03-.37-.2-.07a4 4 0 0 0-2.47 0l-.2.07-1.03.37a3.52 3.52 0 0 1-3.3-6.13'
        fill='currentColor'
      />
      <ellipse
        opacity='.2'
        cx='3.37'
        cy='10.14'
        rx='1.65'
        ry='2.13'
        transform='rotate(-23.83 3.37 10.14)'
        fill='currentColor'
      />
      <ellipse
        opacity='.2'
        cx='1.65'
        cy='2.13'
        rx='1.65'
        ry='2.13'
        transform='scale(-1 1)rotate(-23.83 9.5 58.94)'
        fill='currentColor'
      />
      <ellipse
        opacity='.2'
        cx='8.46'
        cy='5.67'
        rx='1.82'
        ry='2.77'
        transform='rotate(-10.98 8.46 5.67)'
        fill='currentColor'
      />
      <ellipse
        opacity='.2'
        cx='1.8'
        cy='2.74'
        rx='1.8'
        ry='2.74'
        transform='scale(-1 1)rotate(-10.98 8.4 94.5)'
        fill='currentColor'
      />
      <path
        d='m6.22 14.5 2.2-1.65c1.73-1.3 2.6-1.95 3.6-1.95s1.87.65 3.6 1.96l2.2 1.64h0l.32.25a3 3 0 0 1 1.04 2.49c0 .61 0 .92-.03 1.14a3 3 0 0 1-3.94 2.4 9 9 0 0 1-1.03-.5l-.45-.23c-.33-.17-.5-.25-.66-.31a3 3 0 0 0-2.1 0 5 5 0 0 0-.66.31h0l-.46.24h0c-.54.28-.82.42-1.02.49a3 3 0 0 1-3.94-2.4c-.04-.22-.04-.53-.04-1.14l.01-.41a3 3 0 0 1 1.36-2.33'
        stroke='currentColor'
      />
      <ellipse
        cx='3.45'
        cy='10.11'
        rx='1.74'
        ry='2.13'
        transform='rotate(-23.83 3.45 10.1)'
        stroke='currentColor'
      />
      <ellipse
        cx='1.76'
        cy='2.13'
        rx='1.76'
        ry='2.13'
        transform='scale(-1 1)rotate(-23.83 9.5 58.94)'
        stroke='currentColor'
      />
      <ellipse
        cx='8.61'
        cy='5.64'
        rx='1.98'
        ry='2.77'
        transform='rotate(-10.98 8.61 5.64)'
        stroke='currentColor'
      />
      <ellipse
        cx='1.89'
        cy='2.74'
        rx='1.89'
        ry='2.74'
        transform='scale(-1 1)rotate(-10.98 8.4 94.5)'
        stroke='currentColor'
      />
    </svg>
  )
}
