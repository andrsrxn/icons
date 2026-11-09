import type { Icon } from './types'

export const IconWeightScale: Icon = ({
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
      data-slot='icon-ui-weight-scale'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.58 2.42c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v3.16c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-3.16c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83v-3.16c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17zm2.25 3.83c1.08.22 1.62.33 1.85.74s.02.92-.38 1.95l-.7 1.8c-.3.72-.43 1.09-.75 1.26-.3.17-.7.1-1.46-.03l-2-.35-.35-.05c-.09 0-.17.02-.34.05l-2.1.36c-.77.13-1.15.2-1.46.03-.3-.18-.45-.53-.74-1.25l-.73-1.8c-.42-1.03-.63-1.55-.4-1.97s.77-.52 1.86-.74l3.52-.7c.2-.03.3-.05.39-.05s.2.02.4.06z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M2.42 13.58v-3.16c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17h3.16c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v3.16c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-3.16c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83'
        stroke='currentColor'
      />
      <path
        d='M12 11.6a9 9 0 0 0-2.5.29c-.64.17-.96.25-1.12.19-.16-.07-.29-.3-.55-.78l-1.4-2.57c-.38-.71-.58-1.07-.43-1.5s.48-.55 1.14-.81c1.08-.43 2.71-.88 4.86-.88s3.79.45 4.87.88c.65.26.98.4 1.13.81.15.43-.04.78-.43 1.5l-1.39 2.57c-.25.48-.38.71-.54.78s-.48-.02-1.11-.19A10 10 0 0 0 12 11.6'
        stroke='currentColor'
      />
      <path d='M15.46 17.84H8.54' stroke='currentColor' />
      <path d='m11.37 11.59-.42-3.1' stroke='currentColor' />
    </svg>
  )
}
