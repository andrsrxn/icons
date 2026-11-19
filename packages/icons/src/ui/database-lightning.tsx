import type { Icon } from './types'

export const IconDatabaseLightning: Icon = ({
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
      data-slot='icon-ui-database-lightning'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <ellipse opacity='.2' cx='12' cy='5.23' rx='8.88' ry='3.44' fill='currentColor' />
      <path
        opacity='.2'
        d='M3.25 16.75c0-1.31 0-1.97.4-2.27s1.06-.11 2.37.27c1.8.51 4.16 1.05 6.02.97 1.4-.05 2.6.02 4.08-.47l-1.09 3.53.34.05c.9.13 1.36.2 1.6.51.25.32.2.77.1 1.68l-.05.57c-1.52.37-3.56.64-4.98.64-2.46 0-5.76-1.05-7.54-1.69-.59-.2-.88-.32-1.06-.57-.19-.26-.19-.59-.19-1.24z'
        fill='currentColor'
      />
      <ellipse cx='12' cy='5.23' rx='8.88' ry='3.44' stroke='currentColor' />
      <path d='M10.93 12.35c-.93 0-1.5-.03-2.68-.26a7 7 0 0 1-2.19-.78' stroke='currentColor' />
      <path d='M10.93 18.7c-.93 0-1.5-.02-2.68-.25a7 7 0 0 1-2.19-.79' stroke='currentColor' />
      <path d='M12 22.2c-4.9 0-8.88-1.5-8.88-3.37' stroke='currentColor' />
      <path d='M12 15.55c-4.9 0-8.88-1.51-8.88-3.38' stroke='currentColor' />
      <path d='M3.12 5.74V18.6' stroke='currentColor' />
      <path d='M20.88 5.23v5.15' stroke='currentColor' />
      <path
        d='m16.9 14.31-1.56 2.37c-.35.53-.52.8-.53 1.03q0 .38.28.62c.18.15.5.2 1.13.28l.09.01c.35.05.53.08.67.15q.31.18.4.54c.02.15-.01.33-.08.69-.25 1.35-.37 2.02-.26 2.26.18.36.61.54 1 .4.24-.09.62-.66 1.39-1.8l1.56-2.32c.4-.6.6-.9.58-1.17a.8.8 0 0 0-.22-.5c-.18-.2-.54-.26-1.25-.37h0l-.18-.03a2 2 0 0 1-.6-.14.8.8 0 0 1-.4-.58c-.03-.13 0-.3.06-.6.22-1.24.33-1.86.24-2.08a.8.8 0 0 0-1.05-.43c-.22.1-.57.62-1.26 1.67'
        stroke='currentColor'
      />
    </svg>
  )
}
