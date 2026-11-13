import type { Icon } from './types'

export const IconGramophone: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-gramophone'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.06 17.23c1.89 0 2.83 0 3.42.58.58.59.58 1.53.58 3.42v.2H4.94v-.2c0-1.89 0-2.83.58-3.42.59-.58 1.53-.58 3.42-.58z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M14.45 9.36c.81.61 1.22.92 1.14 1.24s-.59.4-1.6.55l-4.3.67-.07.01-.08.02-4.81 1.58c-.77.26-1.16.38-1.38.18s-.11-.6.1-1.38L5.8 3.25c.22-.81.32-1.22.62-1.28.29-.07.56.24 1.1.88l3.2 3.71.08.08.08.07z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='m13.1 17.08 3.67-1.64a2.42 2.42 0 0 0-.41-4.56l-.8-.2' stroke='currentColor' />
      <path
        d='M19.06 21.44v-.26c0-1.89 0-2.83-.58-3.42-.59-.58-1.53-.58-3.42-.58H8.94c-1.89 0-2.83 0-3.42.58-.58.59-.58 1.53-.58 3.42v.26'
        stroke='currentColor'
      />
      <path
        d='M5.91 2.85a.83.83 0 0 1 1.46-.28 35 35 0 0 0 3.75 4.31 47 47 0 0 0 5.67 4.15s-4.1.09-6.97.72a35 35 0 0 0-5.4 1.85.83.83 0 0 1-1.13-.97z'
        stroke='currentColor'
      />
      <path d='M2.57 21.44h18.86' stroke='currentColor' />
    </svg>
  )
}
