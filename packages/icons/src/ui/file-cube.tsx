import type { Icon } from './types'

export const IconFileCube: Icon = ({
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
      data-slot='icon-ui-file-cube'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M7.7 22.25c-1.89 0-2.83 0-3.41-.58-.59-.59-.59-1.53-.59-3.42V5.78c0-1.87 0-2.8.58-3.38s1.51-.6 3.38-.62l2.23-.02c1.31-.01 1.97-.02 2.45.27a2 2 0 0 1 .68.67c.3.48.3 1.14.3 2.45 0 1.3 0 1.94.29 2.42q.25.42.67.67c.48.3 1.13.3 2.42.3h1.6a2 2 0 0 1 1.78 1.79l.01.47v3.14c0 .6-.68.93-1.15.57a.7.7 0 0 0-.8-.05l-1.69 1c-.77.46-1.16.68-1.4 1.03a2 2 0 0 0-.2.35c-.17.38-.17.83-.17 1.73v.66c0 .68 0 1.02.1 1.34.12.31.32.58.74 1.12l.44.56z'
        fill='currentColor'
      />
      <path
        d='M20.1 11.4v-1.14c0-1.24 0-1.87-.24-2.43s-.69-1-1.58-1.86L17.1 4.82l-1.24-1.24c-.87-.87-1.3-1.3-1.85-1.53s-1.17-.23-2.4-.23H9.7c-2.83 0-4.24 0-5.12.88S3.7 5 3.7 7.82v8.43c0 2.83 0 4.25.88 5.12s2.3.88 5.12.88h1.46'
        stroke='currentColor'
      />
      <path d='M13.12 2.34V4.8c0 1.89 0 2.83.58 3.42s1.53.58 3.41.58h2.47' stroke='currentColor' />
      <path
        d='M14.47 19.1v-.91c0-.85 0-1.27.2-1.62s.57-.56 1.3-.98l.9-.52c.74-.42 1.1-.63 1.5-.63s.77.2 1.5.63l.9.52c.73.42 1.1.63 1.3.98s.2.77.2 1.62v.92c0 .84 0 1.27-.2 1.62-.2.34-.57.55-1.3.98l-.9.52c-.73.42-1.1.63-1.5.63s-.76-.21-1.5-.63l-.9-.52c-.73-.43-1.1-.64-1.3-.98-.2-.35-.2-.78-.2-1.62'
        stroke='currentColor'
      />
      <path d='m14.7 16.8 3.67 2.02' stroke='currentColor' />
      <path d='M18.37 18.82v3.94' stroke='currentColor' />
      <path d='m22.05 16.8-3.68 2.02' stroke='currentColor' />
      <path
        opacity='.2'
        d='m21.72 21.23-1.83 1.1a1 1 0 0 1-1.52-.86v-2.03c0-.37.2-.7.53-.88l1.83-.99a1 1 0 0 1 1.47.88v1.92a1 1 0 0 1-.48.86'
        fill='currentColor'
      />
    </svg>
  )
}
