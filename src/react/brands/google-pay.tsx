import type { BrandIcon, BrandIconProps } from '../types'
export const IconBrandGooglePay: BrandIcon = ({ className, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='Google Pay'
    className={`ui-icon-brand ${className ?? ''}`}
    role='img'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    viewBox='0 0 64 24'
    {...props}>
    <mask id='mask0_7332_2569' width='20' height='20' x='2' y='2' maskUnits='userSpaceOnUse'>
      <path
        id='path1'
        fill='#fff'
        d='M21.3 10.177h-9.361v3.638h5.385c-.172 1.336-.976 2.537-2.033 3.246-.886.6-2.015.964-3.352.964-2.584 0-4.78-1.755-5.566-4.12a6 6 0 0 1-.316-1.9c0-.664.117-1.301.316-1.901.786-2.365 2.982-4.12 5.566-4.12 1.463 0 2.765.509 3.804 1.491l2.846-2.865C16.863 2.991 14.622 2 11.939 2c-3.885-.01-7.237 2.237-8.873 5.512A9.9 9.9 0 0 0 2 11.996c0 1.618.389 3.137 1.066 4.483C4.702 19.753 8.054 22 11.94 22c2.683 0 4.933-.891 6.577-2.42 1.88-1.745 2.964-4.31 2.964-7.357 0-.71-.063-1.392-.18-2.047'
      />
    </mask>
    <g id='g1' mask='url(#mask0_7332_2569)' transform='translate(-2 -2)'>
      <path id='rect1' fill='url(#pattern0_7332_2569)' d='M1.097 1.082h21.685V22.91H1.097z' />
    </g>
    <path
      id='path2'
      fill='var(--ui-icon-fill-monochrome)'
      d='M26 18.67V1h5.998q1.585 0 2.877.691a5.1 5.1 0 0 1 2.048 1.9q.78 1.209.78 2.814 0 1.578-.78 2.813a5.27 5.27 0 0 1-2.048 1.925q-1.291.666-2.877.666h-3.316v6.86zm2.682-9.428h3.39q.95 0 1.608-.394.659-.42 1-1.062.366-.666.366-1.381a2.7 2.7 0 0 0-.366-1.358 2.8 2.8 0 0 0-1-1.061q-.658-.42-1.609-.42h-3.389Z'
    />
    <path
      id='path3'
      fill='var(--ui-icon-fill-monochrome)'
      d='M43.44 19.064q-1.364 0-2.39-.543a4.33 4.33 0 0 1-1.633-1.48q-.585-.963-.585-2.197 0-1.357.683-2.295a4.5 4.5 0 0 1 1.853-1.431q1.17-.494 2.584-.494.805 0 1.463.124.66.099 1.17.247.513.147.805.32v-.666q0-1.234-.878-1.974-.877-.74-2.267-.74-.95 0-1.804.444a3.7 3.7 0 0 0-1.39 1.16l-1.78-1.407q.536-.765 1.292-1.308a6.3 6.3 0 0 1 1.731-.839 6.8 6.8 0 0 1 2.024-.296q2.682 0 4.145 1.357 1.463 1.333 1.463 3.751v7.872H47.39v-1.554h-.146a4.4 4.4 0 0 1-.902.938q-.536.444-1.268.715a4.3 4.3 0 0 1-1.634.296m.464-2.171q1.023 0 1.804-.494.78-.494 1.219-1.283a3.5 3.5 0 0 0 .463-1.752 5.4 5.4 0 0 0-1.316-.519 5.8 5.8 0 0 0-1.634-.222q-1.585 0-2.268.642t-.682 1.604q0 .888.634 1.456.657.568 1.78.568'
    />
    <path
      id='path4'
      fill='var(--ui-icon-fill-monochrome)'
      d='M56.588 23.383q-.074.172-.17.345a10 10 0 0 0-.098.272h-2.804l.341-.765q.244-.494.463-.987.147-.32.293-.691.17-.37.341-.765.195-.395.366-.765l.926-2.049-5.193-11.894h2.926l3.56 8.588h.122l3.438-8.588H64l-6.437 15.004q-.171.42-.39.888-.195.47-.366.84-.145.395-.22.567'
    />
    <defs id='defs4'>
      <pattern id='pattern0_7332_2569' width='1' height='1' patternContentUnits='objectBoundingBox'>
        <use xlinkHref='#image0_7332_2569' id='use4' transform='scale(.04167)' />
      </pattern>
      <image
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsSAAALEgHS3X78AAAD/klEQVRIiYWVT28cRRDFf9XdszuzXsd2HMlOiCUQAiFuHLjnykfig/EJOCEu/BESQkAgCthx/N+7O7sz0/U4zHp3HcmhpNbUzPS8qnr1qsf09cfiuoQmQja4qaALvd8kEIDB3UUAATAUBkBGGFiAWGHKyBKWGwQk9uf9x3WCeYKy6YHbCNlBBm5LcOujWAQiRsBjiSz0AQBZxDCUKoSR2JuDA+0W7C2DXQUovAfOoc94Bb7M1iJYgpD6b0LBnQkQhrkTVuVvL1YbqNq1f/f+fbbM/l1TSCSezCC1PT11hOgwG8DMl31Qv9q44h7rC9IKeJ2EVveGLBB43MLBHJLD0xoOakiCJ3N41EAUVLl/tmRJK1ix0fnVc4BsARFY17a/QdFdLwDKbu0H3WdM78Let2xGYhQhASNBmyHVMGugriG2+MkT3qZDTqpnXGoXp1eQLPJR/WaloJfV0UZVAAFZIJESBIcOGAG5gyJDU8CjBW3nvFw855vBV/wWPqFhsOK4z38pYYwgEXBMIilz0FySVvWMgAaoBFGozsxvh3TbNdfDxOtwyF92RGPDBykxCaNfyTOvyqckebPUM1hp4KAhXEwe80f5Od8tXnASP+SMPTrig+B33dCyuhwCBn0AC6kv2QIKgiyuy11+Lr7gx/Alpzznkv0l/+8xe2dmpA2KNsyTYaOW43TE23TIaX5G6w9T82BFZiQBpg4RcDkNQgqcy6h2f2IvBurZp1zffkbbPEYqlnQ4mxNh9/S79pMAl+OImcSNYCaYFceMdr7lg+3vmV++YN5WtO0OqNgAF/93lCSATk63IT2Aebhhu5yy7yXH1VNimGHowbG6H2p9lyZuTCVqxFxwIiMT+MWHXGjIhVecquRm/DsTG+Bekn0ASlgeYV5gKujMKXLFIA8BEdS3N506XEiUBn87TAVXGHNl/vWSS9/iZDDhYvcHbnd/JWtAbg6g28YWh1g3JnZjYt4i+IStxS6YGLZbBIW1is58eVXgUpErCs685EolF7GhHr2i06hf0aG7hcEtVh8R24bYZar5Pk2qGeSyb7UC6aWLM8FExhTjlVdcMeRaJSd6xNTHZCVayr5lKghpipQgzsGH5LDA44IiD4k40zjHzamaMelPwZmMIcZrDflHY0TgjXa58h1EpGGMNEREUmjJbuSwIJjj6QbaHRhcUqtAYY/OAjk4QbY+ri+0ntKJ1kPVbPhhQ0MhbBzpxdV6f5qvdtXFhHTsxjkDpiqYqeBMY6YaLdcWLSWdBkvVByQw67AgkKOwANuCOEOxRkq4TehyQcBJ5yTONUQErhhzo21aFdR6xEIVIi3PoP7PZSZMwkkEy5AmuCJSQdYAzGmVyBjejvkPWPkXjnWLlXgAAAAASUVORK5CYII='
        id='image0_7332_2569'
        width='24'
        height='24'
        preserveAspectRatio='none'
      />
    </defs>
  </svg>
)
