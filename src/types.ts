export type ModuleId = string
export type ImportName = string

export interface Import {
  /** import name to be imported */
  name: ImportName
  /** Import as this name */
  as?: ImportName
  /** Module specifier to import from */
  from: ModuleId
  /** Other imports required */
  peerImports?: ModuleId[]
}

export type PresetImport = ImportName | [name: ImportName, as?: ImportName, from?: ModuleId] | Exclude<Import, 'from'>

export interface Preset {
  from: ModuleId
  imports: (PresetImport | Preset)[]
}

export interface UnimportOptions {
  imports: Import[]
  presets: Preset[]
}
