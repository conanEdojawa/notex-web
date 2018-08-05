Meteor.startup(() => {})

import SimpleSchema from 'simpl-schema'

let NoteSchema = new SimpleSchema(
  {
    resultat: Array,
    'resultat.$': Object,
    'resultat.$.annee': String,
    'resultat.$.ord': Array,
    'resultat.$.ord.$': Object,
    'resultat.$.ord.$.codeMod': String,
    'resultat.$.ord.$.note': Number,
    'resultat.$.ord.$.isVal': Boolean,
    /********** */
    'resultat.$.rat': Array,
    'resultat.$.rat.$': Object,
    'resultat.$.rat.$.codeMod': String,
    'resultat.$.rat.$.note': Number,
    'resultat.$.rat.$.isVal': Boolean
  },
  { requiredByDefault: true }
)

let ArchiveSchema = new SimpleSchema(
  {
    L1: Object,
    'L1.isVal': Boolean,
    'L1.mention': String,
    'L1.S1': Object,
    'L1.S1. isVal': Boolean,
    'L1.S1. mention': String,
    'L1.S1.moyenne': Number,
    'L1.S1.note': Array,
    'L1.S1.note.$': Object,
    'L1.S1.note.$.codeMod': String,
    'L1.S1.note.$.note': String,
    'L1.S2': Object,
    'L1.S2. isVal': Boolean,
    'L1.S2. mention': String,
    'L1.S2.moyenne': Number,
    'L1.S2.note': Array,
    'L1.S2.note.$': Object,
    'L1.S2.note.$.codeMod': String,
    'L1.S2.note.$.note': String,
    /************ */
    L2: Object,
    'L2.isVal': Boolean,
    'L2.mention': String,
    'L2.S3': Object,
    'L2.S3. isVal': Boolean,
    'L2.S3. mention': String,
    'L2.S3.moyenne': Number,
    'L2.S3.note': Array,
    'L2.S3.note.$': Object,
    'L2.S3.note.$.codeMod': String,
    'L2.S3.note.$.note': String,
    'L2.S4': Object,
    'L2.S4. isVal': Boolean,
    'L2.S4. mention': String,
    'L2.S4.moyenne': Number,
    'L2.S4.note': Array,
    'L2.S4.note.$': Object,
    'L2.S4.note.$.codeMod': String,
    'L2.S4.note.$.note': String,
    /*********** */
    L3: Object,
    'L3.isVal': Boolean,
    'L3.mention': String,
    'L3.S5': Object,
    'L3.S5. isVal': Boolean,
    'L3.S5. mention': String,
    'L3.S5.moyenne': Number,
    'L3.S5.note': Array,
    'L3.S5.note.$': Object,
    'L3.S5.note.$.codeMod': String,
    'L3.S5.note.$.note': String,
    'L3.S6': Object,
    'L3.S6. isVal': Boolean,
    'L3.S6. mention': String,
    'L3.S6.moyenne': Number,
    'L3.S6.note': Array,
    'L3.S6.note.$': Object,
    'L3.S6.note.$.codeMod': String,
    'L3.S6.note.$.note': String
  },
  { requiredByDefault: true }
)

let InscritSchema = new SimpleSchema(
  {
    filiere: String,
    semestres: [Number],
    modules: [String]
  },
  { requiredByDefault: true }
)

let EtudiantSchema = new SimpleSchema(
  {
    apogee: String,
    cne: String,
    cin: String,
    nom: String,
    prenom: String,
    dateNaiss: Date,
    lieuNaiss: Date,
    email: String,
    nationalite: String,

    inscrit: InscritSchema,

    note: NoteSchema,

    archive: ArchiveSchema
  },
  { requiredByDefault: true }
)
let UniversiteSchema = new SimpleSchema(
  {
    nom: String,
    anneeUniv: String,
    semestre: Number,
    session: String,
    filiere: Object,
    modules: Object
  },
  { requiredByDefault: true }
)
let EmployerSchema = new SimpleSchema(
  {
    createdAt: Date,
    services: Object,
    profile: Object,
    'profile.codeEmp': String,
    'profile.type': String,
    'profile.nom': String,
    'profile.prenom': String,
    //role: [Object]
    username: String,
    password: String
  },
  { requiredByDefault: false }
)
UserProfile = new Mongo.Collection('userprofile')
UserProfile.attachSchema(EtudiantSchema)

//Meteor.users.attachSchema(EmployerSchema)
// Accounts.createUser({
//   profile: {
//     nom: 'zem',
//     prenom: 'yassine'
//   },
//   username: 'ya',
//   password: '3'
// })

Meteor.publish('users', () => {
  return Meteor.users.find(
    {},
    {
      fields: { profile: 1 }
    }
  )
})
