import type { Icon } from './types'

export const IconHeadset: Icon = ({
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
      data-slot='icon-ui-headset'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M12.8 22.34h.19c3.77 0 5.65 0 6.83-1.17s1.17-3.07 1.17-6.88' stroke='currentColor' />
      <path
        d='M3.01 14.58v-4.7c0-5.17 4.51-8.22 8.97-8.22s9 3.06 9 8.23v4.69'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M8.03 18.58c.24 0 .36 0 .45-.02a1 1 0 0 0 .79-.78l.01-.45v-5.67l-.01-.46a1 1 0 0 0-.79-.78c-.1-.02-.21-.02-.45-.02H6.94a4 4 0 0 0-3.93 3.93v.32a4 4 0 0 0 4.1 3.93z'
        fill='currentColor'
      />
      <path
        d='M3.01 14.5v.5a4 4 0 0 0 4.3 3.77h.64a1.5 1.5 0 0 0 1.33-1.33v-5.91a1.5 1.5 0 0 0-1.33-1.33H6.79a4 4 0 0 0-3.77 3.77z'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M16.66 18.38h.16a4 4 0 0 0 3.93-3.92v-.33a4 4 0 0 0-3.93-3.93h-1.09c-.23 0-.35 0-.45.02a1 1 0 0 0-.78.78c-.02.1-.02.22-.02.46v5.67c0 .24 0 .36.02.45.08.4.39.7.78.78.1.02.22.02.45.02z'
        fill='currentColor'
      />
      <path
        d='M14.72 16.87v-5.53A1.5 1.5 0 0 1 16.05 10h1.16a4 4 0 0 1 3.77 3.77v1.03a4 4 0 0 1-3.77 3.77h-1.16a1.5 1.5 0 0 1-1.33-1.33z'
        stroke='currentColor'
      />
    </svg>
  )
}
