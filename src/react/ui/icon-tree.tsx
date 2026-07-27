import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE1LjI2MyAxNi4xNzVIOC43MzdhMiAyIDAgMCAxLTItMlY4LjgzM0E1LjI1MiA1LjI1MiAwIDAgMSAxMiAzLjU4N2E1LjI1MiA1LjI1MiAwIDAgMSA1LjI2MyA1LjI0NXY1LjM0M2EyIDIgMCAwIDEtMiAyWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyIDIwLjIzVjhtMCAzIDIuNC0xLjM4NU0xMiAxMi42OTNsLTIuNC0xLjM4Nm0tLjY0MiA4LjkyNGg2LjA4NG0tNi4zMDUtNC4wNTZoNi41MjZhMiAyIDAgMCAwIDItMlY4LjgzMkE1LjI1MiA1LjI1MiAwIDAgMCAxMiAzLjU4N2E1LjI1MiA1LjI1MiAwIDAgMC01LjI2MyA1LjI0NXY1LjM0NGEyIDIgMCAwIDAgMiAxLjk5OVoiLz48L3N2Zz4=)
 */
export const IconTree: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-tree'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M15.263 16.175H8.737a2 2 0 0 1-2-2V8.833A5.252 5.252 0 0 1 12 3.587a5.252 5.252 0 0 1 5.263 5.245v5.343a2 2 0 0 1-2 2Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 20.23V8m0 3 2.4-1.385M12 12.693l-2.4-1.386m-.642 8.924h6.084m-6.305-4.056h6.526a2 2 0 0 0 2-2V8.832A5.252 5.252 0 0 0 12 3.587a5.252 5.252 0 0 0-5.263 5.245v5.344a2 2 0 0 0 2 1.999Z'
      />
    </svg>
  )
}
