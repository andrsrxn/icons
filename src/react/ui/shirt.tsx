import type { Icon } from './types'

export const IconShirt: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      data-slot='shirt'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M12.39 6.87c-1.13 0-1.64-.7-1.87-1.33-.19-.51-.63-.97-1.18-.97h-.9a1 1 0 0 0-.77.36L4.33 8.97a1 1 0 0 0 .42 1.57l2.01.76a1 1 0 0 0 1.35-.93v8.03a1 1 0 0 0 1 1l5.93.03a1 1 0 0 0 1-1v-8.21a1 1 0 0 0 1.31.95l2.12-.7a1 1 0 0 0 .51-1.52L17.21 5a1 1 0 0 0-.84-.42l-.96.02c-.54.01-.97.47-1.16.98a1.86 1.86 0 0 1-1.86 1.29'
        fill='#000'
      />
      <path
        d='M12.39 6.87c-1.13 0-1.64-.7-1.87-1.33-.19-.51-.63-.97-1.18-.97h-.87a1 1 0 0 0-.8.4L4.62 9.11a1 1 0 0 0 .3 1.45l1.68 1a1 1 0 0 0 1.51-.85v-.66 8.35a1 1 0 0 0 1 1l5.93.03a1 1 0 0 0 1-1v-8.38.63a1 1 0 0 0 1.52.85l1.68-1.02a1 1 0 0 0 .34-1.36L17.2 5.08a1 1 0 0 0-.88-.5l-.9.02c-.55.01-.98.47-1.17.98a1.86 1.86 0 0 1-1.86 1.29'
        stroke='#000'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
