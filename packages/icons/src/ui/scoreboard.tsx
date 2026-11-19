import type { Icon } from './types'

export const IconScoreboard: Icon = ({
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
      data-slot='icon-ui-scoreboard'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.29 10.7c0-3.03 0-4.54-.78-5.6a4 4 0 0 0-.86-.86c-1.05-.77-2.56-.77-5.58-.77H8.93c-3.02 0-4.53 0-5.58.77a4 4 0 0 0-.86.86c-.78 1.06-.78 2.57-.78 5.6 0 3.01 0 4.52.78 5.58a4 4 0 0 0 .86.86c1.05.77 2.56.77 5.58.77h6.14c3.02 0 4.53 0 5.58-.77a4 4 0 0 0 .86-.86c.78-1.06.78-2.57.78-5.59'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M8.93 17.91h6.14c3.02 0 4.53 0 5.58-.77a4 4 0 0 0 .86-.86c.78-1.06.78-2.57.78-5.59v0c0-3.02 0-4.53-.78-5.59a4 4 0 0 0-.86-.86c-1.05-.77-2.56-.77-5.58-.77H8.93c-3.02 0-4.53 0-5.58.77a4 4 0 0 0-.86.86c-.79 1.06-.79 2.57-.79 5.6v0c0 3.02 0 4.53.78 5.59a4 4 0 0 0 .86.86c1.05.77 2.56.77 5.58.77'
        stroke='currentColor'
      />
      <path d='M6.48 21.05v-3.14' stroke='currentColor' />
      <path d='M17.52 21.05v-3.14' stroke='currentColor' />
      <path
        d='m4.97 8.41.74-.47c.68-.43 1.02-.65 1.28-.5.26.14.26.54.26 1.34v5.52'
        stroke='currentColor'
      />
      <path
        d='M19.27 10.83c0 1.98-.52 3.59-2.31 3.59-1.8 0-2.31-1.6-2.31-3.59s.6-3.59 2.3-3.59c1.72 0 2.32 1.6 2.32 3.59'
        stroke='currentColor'
      />
      <path
        d='M11.74 8.77a.45.45 0 1 1-.91 0 .45.45 0 0 1 .9 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M11.74 12.6a.45.45 0 1 1-.91 0 .45.45 0 0 1 .9 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
