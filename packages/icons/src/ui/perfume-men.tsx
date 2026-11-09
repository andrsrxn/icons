import type { Icon } from './types'

export const IconPerfumeMen: Icon = ({
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
      data-slot='icon-ui-perfume-men'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.71 7.9c-2.95.02-4.42.03-5.46.79a4 4 0 0 0-.9.91c-.75 1.04-.75 2.52-.75 5.47 0 2.97 0 4.46.75 5.5a4 4 0 0 0 .92.92c1.04.75 2.53.75 5.5.75h.45c2.98 0 4.47 0 5.52-.75a4 4 0 0 0 .9-.9c.76-1.05.76-2.55.76-5.53v-.98c0-2.03 0-3.04-.36-3.82a4 4 0 0 0-1.94-1.97c-.79-.37-1.8-.38-3.82-.4zm2.91 7.2a2.62 2.62 0 1 1-5.24 0 2.62 2.62 0 0 1 5.24 0'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M9.95 5.2v2.7' stroke='currentColor' />
      <path d='M14.05 7.89V5.2' stroke='currentColor' />
      <circle cx='12' cy='15.1' r='2.62' stroke='currentColor' />
      <path
        d='M11.74 7.96h.52c2.94 0 4.42 0 5.46.73a4 4 0 0 1 .94.95c.74 1.04.74 2.51.74 5.46s0 4.42-.74 5.46a4 4 0 0 1-.94.95c-1.04.73-2.52.73-5.46.73h-.52c-2.94 0-4.42 0-5.46-.73a4 4 0 0 1-.94-.95c-.74-1.04-.74-2.51-.74-5.46s0-4.42.74-5.46a4 4 0 0 1 .94-.95c1.04-.73 2.52-.73 5.46-.73'
        stroke='currentColor'
      />
      <path
        d='M9.63 1.8h4.74c.62 0 .94 0 1.17.14a1 1 0 0 1 .36.37c.14.23.14.54.14 1.17s0 .94-.14 1.17a1 1 0 0 1-.36.36c-.23.14-.55.14-1.17.14H9.63c-.62 0-.94 0-1.17-.14a1 1 0 0 1-.36-.36c-.14-.23-.14-.55-.14-1.17 0-.63 0-.94.14-1.17a1 1 0 0 1 .36-.37c.23-.13.55-.13 1.17-.13'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M16.04 3.48c0-.63 0-.94-.14-1.17a1 1 0 0 0-.36-.37c-.23-.13-.55-.13-1.17-.13H9.63c-.62 0-.94 0-1.17.13a1 1 0 0 0-.36.37c-.14.23-.14.54-.14 1.17s0 .94.14 1.17a1 1 0 0 0 .36.36c.23.14.55.14 1.17.14h4.74c.62 0 .94 0 1.17-.14a1 1 0 0 0 .36-.36c.14-.23.14-.55.14-1.17'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
    </svg>
  )
}
