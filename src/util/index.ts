export const periodicTable = [
  'Ac', 'Ag', 'Al', 'Am', 'Ar', 'As', 'At', 'Au', 'B', 'Ba', 'Be', 'Bh', 'Bi', 'Bk', 'Br',
  'C', 'Ca', 'Cd', 'Ce', 'Cf', 'Cl', 'Cm', 'Cn', 'Co', 'Cr', 'Cs', 'Cu', 'Db', 'Ds', 'Dy',
  'Er', 'Es', 'Eu', 'F', 'Fe', 'Fl', 'Fm', 'Fr', 'Ga', 'Gd', 'Ge', 'H', 'He', 'Hf', 'Hg',
  'Ho', 'Hs', 'I', 'In', 'Ir', 'K', 'Kr', 'La', 'Li', 'Lr', 'Lu', 'Lv', 'Mc', 'Md', 'Mg',
  'Mn', 'Mo', 'Mt', 'N', 'Na', 'Nb', 'Nd', 'Ne', 'Nh', 'Ni', 'No', 'Np', 'O', 'Og', 'Os',
  'P', 'Pa', 'Pb', 'Pd', 'Pm', 'Po', 'Pr', 'Pt', 'Pu', 'Ra', 'Rb', 'Re', 'Rf', 'Rg', 'Rh',
  'Th', 'Ti', 'Tl', 'Tm', 'Ts', 'U', 'V', 'W', 'Xe', 'Y', 'Yb', 'Zn', 'Zr'
] as const

export type Element = typeof periodicTable[number]

export const breakify = (str: string) => {
  console.log({ str })
  for (let i = 0; i < str.length; i++) {
    const oneChar = str.charAt(i).toUpperCase()
    const twoChar = `${oneChar.toUpperCase()}${str.charAt(i + 1)}`
    console.log({ twoChar })
    if (periodicTable.includes(twoChar as typeof periodicTable[number])) {
      return [str.slice(0, i), twoChar, str.slice(i + 2)]
    }
    console.log({ oneChar })
    if (periodicTable.includes(oneChar as typeof periodicTable[number])) {
      return [str.slice(0, i), oneChar, str.slice(i + 1)]
    }
  }
  return ''
}
