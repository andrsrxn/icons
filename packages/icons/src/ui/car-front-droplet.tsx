import type { Icon } from './types'

export const IconCarFrontDroplet: Icon = ({
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
      data-slot='icon-ui-car-front-droplet'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M21.77 13.31a7 7 0 0 0-.48-1.87 3 3 0 0 0-1.79-1.48c-.42-.13-.93-.13-1.93-.13H6.64c-.97 0-1.45 0-1.86.12A3 3 0 0 0 3 11.36c-.22.38-.32.85-.54 1.79-.32 1.42-.49 2.13-.4 2.7a3 3 0 0 0 1.85 2.31c.54.22 1.26.22 2.72.22h10.93c1.4 0 2.1 0 2.64-.2a3 3 0 0 0 1.85-2.24c.1-.56-.03-1.25-.29-2.63'
        fill='currentColor'
      />
      <path
        d='M12.25 9.83H6.38c-1.01 0-1.52 0-1.95.13a3 3 0 0 0-1.79 1.5c-.2.4-.3.9-.47 1.9-.24 1.36-.37 2.05-.26 2.6a3 3 0 0 0 1.86 2.22c.52.2 1.22.2 2.61.2h10.44c2.06 0 3.1 0 3.82-.44a3 3 0 0 0 1.25-1.53c.3-.79.1-1.8-.3-3.82'
        stroke='currentColor'
      />
      <path
        d='m4.25 9.83.2-1.12c.44-2.35.66-3.52 1.49-4.22s2.03-.7 4.42-.7h2.67'
        stroke='currentColor'
      />
      <path
        d='M3.21 18.38c0 1.12 0 1.67.28 2.06q.15.2.35.35c.39.28.95.28 2.06.28H6c1.1 0 1.66 0 2.06-.28q.2-.15.34-.35c.28-.39.28-.94.28-2.06'
        stroke='currentColor'
      />
      <path
        d='M15.23 18.38c0 1.12 0 1.67.28 2.06q.15.2.34.35c.4.28.95.28 2.07.28h.07c1.12 0 1.68 0 2.07-.28q.2-.15.34-.35c.28-.39.28-.94.28-2.06'
        stroke='currentColor'
      />
      <path d='M15.8 13.1h2.16' stroke='currentColor' />
      <path d='M5.95 13.1H8.2' stroke='currentColor' />
      <path d='M4.25 9.83 2.09 7.67' stroke='currentColor' />
      <path
        d='M20.85 7.45c0 1.4-1.2 2.53-2.68 2.53s-2.68-1.13-2.68-2.53c0-2.94 2.68-4.37 2.68-4.37s2.68 1.49 2.68 4.37'
        stroke='currentColor'
      />
    </svg>
  )
}
