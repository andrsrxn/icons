import type { Icon } from './types'

export const IconPawPrintOff: Icon = ({
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
      data-slot='icon-ui-paw-print-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m6.26 14.47 1.46-1.1c1.82-1.36 2.73-2.05 3.76-2.19a4 4 0 0 1 1.08 0c1.03.14 1.94.83 3.77 2.2l1.45 1.1a3.52 3.52 0 0 1-3.3 6.12l-1.03-.37-.2-.07a4 4 0 0 0-2.67.07l-1.03.37a3.52 3.52 0 0 1-3.3-6.13'
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
        d='m8.42 12.85-2.2 1.65-.32.25a3 3 0 0 0-1.04 2.08v.41c0 .61 0 .92.03 1.14a3 3 0 0 0 3.94 2.4c.2-.07.48-.21 1.02-.5h0l.46-.23h0c.33-.17.5-.25.66-.31a3 3 0 0 1 2.1 0c.16.06.33.14.66.31l.45.24c.55.28.82.42 1.03.49a3 3 0 0 0 3.94-2.4c.03-.22.03-.53.03-1.14v-.41a3 3 0 0 0-1.04-2.08l-.33-.25h0l-2.18-1.64c-1.74-1.31-2.6-1.96-3.6-1.96-1.01 0-1.88.65-3.61 1.95'
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
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
