import type { Icon } from './types'

export const IconChandelier: Icon = ({
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
      data-slot='icon-ui-chandelier'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m5.14 15.25.48-.01a3 3 0 0 0 2.73-2.42q.09-.28.1-.38a1.5 1.5 0 0 0-1.32-1.74l-.38-.01H3a1.5 1.5 0 0 0-1.37 1.7q0 .06.06.28l.09.39a3 3 0 0 0 3.1 2.19z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m18.92 15.25.48-.01a3 3 0 0 0 2.73-2.42q.09-.28.1-.38a1.5 1.5 0 0 0-1.32-1.74l-.38-.01h-3.75a1.5 1.5 0 0 0-1.37 1.7q0 .06.06.28l.09.39a3 3 0 0 0 3.1 2.19z'
        fill='currentColor'
      />
      <path d='M14.54 4.12H9.46' stroke='currentColor' />
      <path d='M12 4.2v11.46a3.44 3.44 0 0 1-6.89 0v-.37' stroke='currentColor' />
      <path d='M12 4.12v11.54a3.44 3.44 0 0 0 6.89 0v-.36' stroke='currentColor' />
      <path
        d='m5.14 15.25.48-.01a3 3 0 0 0 2.73-2.42q.09-.28.1-.38a1.5 1.5 0 0 0-1.32-1.74l-.38-.01H3a1.5 1.5 0 0 0-1.37 1.7q0 .06.06.28l.09.39a3 3 0 0 0 3.1 2.19z'
        stroke='currentColor'
      />
      <path
        d='m18.92 15.25.48-.01a3 3 0 0 0 2.73-2.42q.09-.28.1-.38a1.5 1.5 0 0 0-1.32-1.74l-.38-.01h-3.75a1.5 1.5 0 0 0-1.37 1.7q0 .06.06.28l.09.39a3 3 0 0 0 3.1 2.19z'
        stroke='currentColor'
      />
    </svg>
  )
}
