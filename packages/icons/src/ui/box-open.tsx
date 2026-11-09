import type { Icon } from './types'

export const IconBoxOpen: Icon = ({
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
      data-slot='icon-ui-box-open'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m19.27 17.72-6.29 3.5a.5.5 0 0 1-.74-.43v-6.37A.5.5 0 0 1 13 14l2.5 1.5a.5.5 0 0 0 .4.04l1.96-.56.16-.08.7-.54a.5.5 0 0 1 .8.4v2.53a.5.5 0 0 1-.25.44'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m4.8 17.72 6.3 3.5a.5.5 0 0 0 .74-.43v-6.37a.5.5 0 0 0-.76-.43l-2.5 1.5a.5.5 0 0 1-.4.04l-1.96-.56-.16-.08-.7-.54a.5.5 0 0 0-.8.4v2.53q.01.29.25.44'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M11.85 5.33 5.3 9.12a.5.5 0 0 0 0 .87l6.23 3.6q.26.13.52-.02l6.22-3.98a.5.5 0 0 0-.02-.85l-5.9-3.41a.5.5 0 0 0-.5 0'
        fill='currentColor'
      />
      <path
        d='M4.36 14.08v.42c0 1.8 0 2.71.45 3.44.45.72 1.26 1.12 2.87 1.93l.67.34h0c1.76.87 2.63 1.31 3.58 1.31.94 0 1.82-.44 3.57-1.31l.67-.34c1.62-.8 2.43-1.2 2.87-1.93.45-.73.45-1.63.45-3.44v-.42'
        stroke='currentColor'
      />
      <path d='m4.8 9.78 7.13 3.92' stroke='currentColor' />
      <path d='m4.8 9.24 7.13-3.92' stroke='currentColor' />
      <path
        d='m11.96 5.32-1.52-.93c-.97-.59-1.45-.88-1.98-.9-.54-.01-1.04.26-2.03.8L4.11 5.56c-1.32.72-1.98 1.08-2 1.64-.02.57.6.98 1.87 1.8l.69.44'
        stroke='currentColor'
      />
      <path
        d='m11.96 13.67-1.94 1.17c-.98.6-1.47.9-2.02.9-.55.01-1.05-.27-2.05-.85l-2.3-1.32C2.29 12.78 1.6 12.4 1.6 11.8c0-.58.7-.96 2.1-1.72l.97-.52'
        stroke='currentColor'
      />
      <path
        d='m12.04 13.67 1.94 1.17c.98.6 1.47.9 2.02.9.55.01 1.05-.27 2.05-.85l2.3-1.32c1.37-.79 2.06-1.18 2.05-1.77 0-.58-.7-.96-2.1-1.72l-.97-.52'
        stroke='currentColor'
      />
      <path
        d='m11.97 5.32 1.74-1.02c.94-.55 1.4-.83 1.93-.84.52 0 1 .25 1.96.76l2.31 1.22c1.3.69 1.96 1.03 2 1.6.03.56-.58.97-1.8 1.81l-.85.59'
        stroke='currentColor'
      />
      <path d='M11.93 13.7v7.65' stroke='currentColor' />
      <path d='m19.06 9.78-7.13 3.92' stroke='currentColor' />
      <path d='m19.06 9.24-7.13-3.92' stroke='currentColor' />
    </svg>
  )
}
