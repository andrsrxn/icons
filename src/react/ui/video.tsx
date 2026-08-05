import type { Icon } from './types'

export const IconVideo: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='video'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M3.578 10.675c0-1.885 0-2.828.586-3.414.586-.586 1.529-.586 3.414-.586h4.16c1.885 0 2.828 0 3.413.586.586.586.586 1.529.586 3.414v2.65c0 1.886 0 2.828-.586 3.414-.585.586-1.528.586-3.414.586H7.578c-1.885 0-2.828 0-3.414-.586-.586-.586-.586-1.529-.586-3.414v-2.65Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M3.578 10.675c0-1.885 0-2.828.586-3.414.586-.586 1.529-.586 3.414-.586h4.16c1.885 0 2.828 0 3.413.586.586.586.586 1.529.586 3.414v2.65c0 1.886 0 2.828-.586 3.414-.585.586-1.528.586-3.414.586H7.578c-1.885 0-2.828 0-3.414-.586-.586-.586-.586-1.529-.586-3.414v-2.65Z'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M15.737 11.074c0-.531 0-.797.079-1.03a1.5 1.5 0 0 1 .413-.631c.182-.166.425-.272.912-.485 1.048-.458 1.573-.687 1.997-.626a1.5 1.5 0 0 1 1.057.692c.227.364.227.936.227 2.08v1.876c0 1.138 0 1.706-.226 2.07a1.5 1.5 0 0 1-1.052.692c-.422.064-.945-.16-1.99-.61-.49-.211-.736-.317-.92-.482a1.5 1.5 0 0 1-.417-.633c-.08-.235-.08-.502-.08-1.037v-1.876Z'
      />
    </svg>
  )
}
