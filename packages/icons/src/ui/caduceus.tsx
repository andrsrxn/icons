import type { Icon } from './types'

export const IconCaduceus: Icon = ({
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
      data-slot='icon-ui-caduceus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M7.15 13.66h9.7' stroke='currentColor' />
      <path d='M8.28 16.9h7.44' stroke='currentColor' />
      <path d='M9.53 20.14h4.94' stroke='currentColor' />
      <path
        opacity='.2'
        d='m2.96 8.12-.41.3c-.69.48-1.03.72-.98 1.02.04.3.43.44 1.2.7 1.36.45 3.09.83 4.85.51 2.27-.4 3.5-1.72 4.38-2.72l-.8-.4C9.12 6.45 8.07 5.92 6.96 6s-2.07.76-3.99 2.11'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m21.04 8.12.41.3c.69.48 1.03.72.98 1.02-.04.3-.43.44-1.2.7a10 10 0 0 1-4.85.51c-2.27-.4-3.5-1.72-4.38-2.72l.8-.4c2.09-1.07 3.14-1.6 4.25-1.52s2.07.76 3.99 2.11'
        fill='currentColor'
      />
      <path
        d='m2.55 8.41 1.4-.98h0C5.39 6.4 6.1 5.9 6.94 5.83c.83-.05 1.62.35 3.19 1.15l1.87.95c-.89 1-2.11 2.32-4.38 2.72a10 10 0 0 1-4.85-.52c-.77-.25-1.16-.38-1.2-.69s.3-.54.98-1.03'
        stroke='currentColor'
      />
      <path
        d='m21.45 8.41-1.4-.98h0c-1.44-1.02-2.16-1.53-2.99-1.6-.83-.05-1.62.35-3.19 1.15L12 7.93c.89 1 2.11 2.32 4.38 2.72a10 10 0 0 0 4.85-.52c.77-.25 1.16-.38 1.2-.69s-.3-.54-.98-1.03'
        stroke='currentColor'
      />
      <path d='M12 22.2V5.12' stroke='currentColor' />
      <path d='M14.01 3.1a2.01 2.01 0 1 1-4.02 0 2.01 2.01 0 0 1 4.02 0' stroke='currentColor' />
      <circle opacity='.2' cx='12' cy='3.1' r='1.98' fill='currentColor' />
    </svg>
  )
}
