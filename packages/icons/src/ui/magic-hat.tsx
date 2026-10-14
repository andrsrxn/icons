import type { Icon } from './types'

export const IconMagicHat: Icon = ({
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
      data-slot='icon-ui-magic-hat'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M18.9 14.16v3.96c0 1.89 0 2.83-.58 3.41s-1.53.59-3.41.59H9.09c-1.88 0-2.83 0-3.41-.59-.59-.58-.59-1.52-.59-3.41v-3.96l6.61.74z'
        fill='currentColor'
      />
      <path
        d='M18.9 14.5v3.36c0 1.51 0 2.27-.67 3.1-.68.83-1.23.94-2.34 1.16-1.02.2-2.31.36-3.89.36a20 20 0 0 1-3.89-.36c-1.1-.22-1.66-.33-2.34-1.16s-.68-1.59-.68-3.1v-3.37'
        stroke='currentColor'
      />
      <ellipse
        cx='12'
        cy='13.08'
        rx='2.03'
        ry='8.55'
        transform='rotate(90 12 13.08)'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='m8.42 5.6-.68-1.28-.69 1.28-1.31.72L7.05 7l.69 1.5.68-1.5 1.43-.74z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m16.08 3.74-.81-1.52-.82 1.52-1.56.87 1.56.8.82 1.78.8-1.78 1.7-.88z'
        fill='currentColor'
      />
      <path d='M5.26 6.26c1.22 0 2.53-1.32 2.53-2.54' stroke='currentColor' />
      <path d='M12.32 4.53c1.46 0 3.01-1.57 3.01-3.01' stroke='currentColor' />
      <path d='M10.33 6.26c-1.22 0-2.54-1.32-2.54-2.54' stroke='currentColor' />
      <path d='M18.34 4.53c-1.44 0-3-1.57-3-3.01' stroke='currentColor' />
      <path d='M5.26 6.26c1.21 0 2.53 1.34 2.53 2.53' stroke='currentColor' />
      <path d='M12.32 4.53c1.45 0 3.01 1.59 3.01 3' stroke='currentColor' />
      <path d='M10.33 6.26c-1.2 0-2.54 1.32-2.54 2.53' stroke='currentColor' />
      <path d='M18.34 4.53c-1.42 0-3 1.57-3 3' stroke='currentColor' />
    </svg>
  )
}
