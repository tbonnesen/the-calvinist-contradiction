const toneProfiles = {
  pastoral: {
    label: "Pastoral",
    subtitle:
      "A gentle but direct biblical and logical challenge to Calvinism and Replacement Theology, using KJV references.",
    description:
      "Pastoral mode aims to be clear, charitable, and spiritually constructive while still naming contradictions in both topics.",
    intro:
      "This study tool is for believers who want to test doctrine carefully without unnecessary hostility. It organizes major concerns with Calvinism and Replacement Theology by showing where key claims can conflict with plain KJV readings and coherence.",
    logicSummary: [
      "If people are blamed for unbelief, invitations to believe should still read like real calls, not empty words.",
      "If Christ is presented as a provision for the world, readers naturally expect the gospel offer to be genuinely broad.",
      "If God binds promises to Israel to enduring covenant language, permanent erasure claims require unusually strong textual proof."
    ]
  },
  debate: {
    label: "Debate",
    subtitle:
      "A focused case that Calvinist and Replacement Theology claims fail under textual pressure and internal logical testing.",
    description:
      "Debate mode is concise and confronts doctrinal inconsistencies directly.",
    intro:
      "This framework isolates high-impact contradictions in Calvinism and Replacement Theology and tests them against direct KJV statements. The goal is a falsifiable biblical and logical case.",
    logicSummary: [
      "A sound model must keep these together: commands to all, real blame for refusal, and sincere divine invitation.",
      "Universal atonement language is strained when redefined to exclude most of humanity.",
      "Replacement claims lose force when Romans 11 and covenant continuity passages are flattened into total transfer language."
    ]
  },
  academic: {
    label: "Academic",
    subtitle:
      "A structured doctrinal critique of Calvinism and Replacement Theology using exegetical scope and coherence analysis.",
    description:
      "Academic mode emphasizes interpretive method, lexical scope, and system-level consistency.",
    intro:
      "This tool presents an analytical critique of core Calvinist and supersessionist propositions by comparing them with straightforward KJV textual phenomena: universal imperatives, covenant continuity language, restoration motifs, and warning discourse.",
    logicSummary: [
      "Judgment language assumes meaningful agency, even while salvation is fully dependent on grace.",
      "Scope terms such as world and every man require strong contextual warrants before being reduced to subgroup meanings.",
      "Temporal and covenant markers in Romans 11 and prophetic texts resist reduction to permanent displacement models."
    ]
  }
};

const pageMode = document.body?.dataset.page || "main";
const isReplacementPage = pageMode === "replacement";

const argumentsData = [
  {
    title: "Total Inability vs God's Universal Call",
    tones: {
      pastoral: {
        claim:
          "Calvinism says the non-elect cannot respond savingly, yet Scripture repeatedly extends broad calls to repent and come.",
        logic:
          "A universal invitation sounds sincere when people are treated as real hearers who are accountable for refusal."
      },
      debate: {
        claim:
          "Total inability clashes with global repentance commands that target all hearers as if response is expected.",
        logic:
          "If inability is defined so tightly that no one can respond unless specially acted on, universal commands can sound more like verdicts than open calls."
      },
      academic: {
        claim:
          "The Calvinist inability thesis is difficult to reconcile with the breadth of universal imperative language in evangelistic texts.",
        logic:
          "A coherent account should keep both truths together: grace is necessary, and universal commands still function as genuine summons."
      }
    },
    references: [
      {
        reference: "Acts 17:30 (KJV)",
        passage:
          "And the times of this ignorance God winked at; but now commandeth all men every where to repent:"
      },
      {
        reference: "Isaiah 55:1 (KJV)",
        passage:
          "Ho, every one that thirsteth, come ye to the waters, and he that hath no money; come ye, buy, and eat; yea, come, buy wine and milk without money and without price."
      },
      {
        reference: "Revelation 22:17 (KJV)",
        passage:
          "And the Spirit and the bride say, Come. And let him that heareth say, Come. And let him that is athirst come. And whosoever will, let him take the water of life freely."
      }
    ]
  },
  {
    title: "Unconditional Election vs God's Impartial Character",
    tones: {
      pastoral: {
        claim:
          "Unconditional election is often presented as gracious mystery, yet it raises hard questions when read beside texts about God's impartial judgment and broad saving desire.",
        logic:
          "This is a synthesis question, not a one-verse argument. A strong model must explain how impartiality and broad desire fit with a selective decree."
      },
      debate: {
        claim:
          "Unconditional election faces pressure from texts saying God is no respecter of persons and calls all to repentance.",
        logic:
          "A selective decree can be argued, but then universal-desire language must be explained plainly, not just minimized."
      },
      academic: {
        claim:
          "The doctrine of unconditional election must be synthesized with texts on divine impartiality and broad salvific intent.",
        logic:
          "Romans 2:11 speaks first to impartial judgment; when read with 1 Timothy 2:3-4 and 2 Peter 3:9, it still demands a clear decretal/preceptive explanation."
      }
    },
    references: [
      {
        reference: "Romans 2:11 (KJV)",
        passage: "For there is no respect of persons with God."
      },
      {
        reference: "Acts 10:34 (KJV)",
        passage:
          "Then Peter opened his mouth, and said, Of a truth I perceive that God is no respecter of persons:"
      },
      {
        reference: "1 Timothy 2:3-4 (KJV)",
        passage:
          "For this is good and acceptable in the sight of God our Saviour; Who will have all men to be saved, and to come unto the knowledge of the truth."
      },
      {
        reference: "2 Peter 3:9 (KJV)",
        passage:
          "The Lord is not slack concerning his promise, as some men count slackness; but is longsuffering to us-ward, not willing that any should perish, but that all should come to repentance."
      }
    ]
  },
  {
    title: "Limited Atonement vs Scripture's Universal Scope Terms",
    tones: {
      pastoral: {
        claim:
          "Many believers struggle because Calvinism limits atonement while Scripture often describes Christ's provision in broad terms like world and every man.",
        logic:
          "If Christ's death is never for the non-elect in any sense, universal gospel language can sound narrower than the text itself."
      },
      debate: {
        claim:
          "Limited atonement requires redefining world and every man into elect-only categories not obvious in the passages.",
        logic:
          "The plain semantic force of universal terms is reduced to protect system coherence."
      },
      academic: {
        claim:
          "Particular redemption proposals must account for repeated universal-scope expressions in Johannine and Hebrews texts.",
        logic:
          "A narrower referent is plausible only where context compels it; absent such markers, universal scope remains the default reading."
      }
    },
    references: [
      {
        reference: "1 John 2:2 (KJV)",
        passage:
          "And he is the propitiation for our sins: and not for ours only, but also for the sins of the whole world."
      },
      {
        reference: "Hebrews 2:9 (KJV)",
        passage:
          "But we see Jesus, who was made a little lower than the angels for the suffering of death, crowned with glory and honour; that he by the grace of God should taste death for every man."
      },
      {
        reference: "John 3:16 (KJV)",
        passage:
          "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."
      }
    ]
  },
  {
    title: "Irresistible Grace vs Human Resistance",
    tones: {
      pastoral: {
        claim:
          "Calvinism teaches saving grace is effectual and ultimately irresistible for the elect, yet many passages speak of resisted divine appeal.",
        logic:
          "When people are said to resist and refuse, the text seems to describe morally significant resistance, not merely surface-level opposition."
      },
      debate: {
        claim:
          "Irresistible grace is undermined by direct statements that people resist the Spirit and refuse Christ.",
        logic:
          "The doctrine survives only by splitting resistance into categories the passages themselves do not spell out."
      },
      academic: {
        claim:
          "The irresistible grace thesis must reconcile with narratives and discourses depicting persistent human refusal of divine initiative.",
        logic:
          "Exegetically, resistance language carries agency weight that complicates strictly unilateral conversion models."
      }
    },
    references: [
      {
        reference: "Acts 7:51 (KJV)",
        passage:
          "Ye stiffnecked and uncircumcised in heart and ears, ye do always resist the Holy Ghost: as your fathers did, so do ye."
      },
      {
        reference: "Matthew 23:37 (KJV)",
        passage:
          "O Jerusalem, Jerusalem, thou that killest the prophets, and stonest them which are sent unto thee, how often would I have gathered thy children together, even as a hen gathereth her chickens under her wings, and ye would not!"
      },
      {
        reference: "John 5:40 (KJV)",
        passage: "And ye will not come to me, that ye might have life."
      }
    ]
  },
  {
    title: "Guaranteed Perseverance vs Apostasy Warnings",
    tones: {
      pastoral: {
        claim:
          "Calvinism often treats final perseverance as guaranteed for all true believers, yet Scripture gives serious warnings about falling away.",
        logic:
          "If falling away cannot truly occur, warning passages can begin to sound less like urgent cautions and more like rhetorical devices."
      },
      debate: {
        claim:
          "Perseverance certainty flattens explicit warning texts that describe real danger after real participation.",
        logic:
          "Calling these warnings hypothetical sidesteps their plain conditional force."
      },
      academic: {
        claim:
          "Perseverance models face interpretive friction with warning pericopes that present post-enlightenment apostasy scenarios.",
        logic:
          "The pragmatic function of warning discourse is weakened if the warned outcome is categorically impossible for the addressed group."
      }
    },
    references: [
      {
        reference: "Hebrews 6:4-6 (KJV)",
        passage:
          "For it is impossible for those who were once enlightened, and have tasted of the heavenly gift, and were made partakers of the Holy Ghost, And have tasted the good word of God, and the powers of the world to come, If they shall fall away, to renew them again unto repentance; seeing they crucify to themselves the Son of God afresh, and put him to an open shame."
      },
      {
        reference: "2 Peter 2:20-21 (KJV)",
        passage:
          "For if after they have escaped the pollutions of the world through the knowledge of the Lord and Saviour Jesus Christ, they are again entangled therein, and overcome, the latter end is worse with them than the beginning. For it had been better for them not to have known the way of righteousness, than, after they have known it, to turn from the holy commandment delivered unto them."
      },
      {
        reference: "John 15:6 (KJV)",
        passage:
          "If a man abide not in me, he is cast forth as a branch, and is withered; and men gather them, and cast them into the fire, and they are burned."
      }
    ]
  }
];

const proofTextsData = [
  {
    title: "Romans 9",
    claimLabel: "Calvinist Reading",
    responseLabel: "Response",
    claim:
      "Paul's mercy and hardening language teaches unconditional individual election and reprobation, not conditioned on foreseen faith.",
    tones: {
      pastoral:
        "Romans 9 strongly stresses God's freedom, including the question, Why doth he yet find fault? That must be taken seriously. But Paul still says they sought it not by faith, so sovereignty and unbelief both matter in his argument.",
      debate:
        "The strongest Reformed case is Romans 9:18-24 plus 9:19. The strongest counter is Paul's own explanation in 9:30-32 and 10:21, where unbelief is treated as a real reason, not only a label for what happened.",
      academic:
        "Romans 9 should be read within Romans 9-11 as a whole: divine freedom, covenant history, and explicit faith/unbelief explanations. The 9:19 objection raises accountability questions, yet Paul's own wherefore and stretched-forth-hands language still gives explanatory weight to unbelief."
    },
    references: [
      {
        reference: "Romans 9:14-16 (KJV)",
        passage:
          "What shall we say then? Is there unrighteousness with God? God forbid. For he saith to Moses, I will have mercy on whom I will have mercy, and I will have compassion on whom I will have compassion. So then it is not of him that willeth, nor of him that runneth, but of God that sheweth mercy."
      },
      {
        reference: "Romans 9:18 (KJV)",
        passage:
          "Therefore hath he mercy on whom he will have mercy, and whom he will he hardeneth."
      },
      {
        reference: "Romans 9:19-21 (KJV)",
        passage:
          "Thou wilt say then unto me, Why doth he yet find fault? For who hath resisted his will? Nay but, O man, who art thou that repliest against God? Shall the thing formed say to him that formed it, Why hast thou made me thus? Hath not the potter power over the clay, of the same lump to make one vessel unto honour, and another unto dishonour?"
      },
      {
        reference: "Romans 9:6-8 (KJV)",
        passage:
          "Not as though the word of God hath taken none effect. For they are not all Israel, which are of Israel: Neither, because they are the seed of Abraham, are they all children: but, In Isaac shall thy seed be called. That is, They which are the children of the flesh, these are not the children of God: but the children of the promise are counted for the seed."
      },
      {
        reference: "Romans 9:30-32 (KJV)",
        passage:
          "What shall we say then? That the Gentiles, which followed not after righteousness, have attained to righteousness, even the righteousness which is of faith. But Israel, which followed after the law of righteousness, hath not attained to the law of righteousness. Wherefore? Because they sought it not by faith, but as it were by the works of the law."
      },
      {
        reference: "Romans 10:9-13 (KJV)",
        passage:
          "That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved. For with the heart man believeth unto righteousness; and with the mouth confession is made unto salvation. For the scripture saith, Whosoever believeth on him shall not be ashamed. For there is no difference between the Jew and the Greek: for the same Lord over all is rich unto all that call upon him. For whosoever shall call upon the name of the Lord shall be saved."
      },
      {
        reference: "Romans 11:23 (KJV)",
        passage:
          "And they also, if they abide not still in unbelief, shall be graffed in: for God is able to graff them in again."
      },
      {
        reference: "Romans 11:32 (KJV)",
        passage:
          "For God hath concluded them all in unbelief, that he might have mercy upon all."
      }
    ]
  },
  {
    title: "Romans 9:13 (Jacob and Esau)",
    claimLabel: "Calvinist Reading",
    responseLabel: "Response",
    claim:
      "Jacob and Esau show pre-birth discriminating choice, so individual election and reprobation are already established before works.",
    tones: {
      pastoral:
        "Romans 9:11-13 is serious and should not be minimized. Paul uses twins to show God's choice before works. Even so, the oracle says the elder shall serve the younger, so this text can point to covenant-role priority without by itself proving Esau's final eternal fate.",
      debate:
        "Reformed readers rightly stress individuals are in view and that Paul expects justice objections. The counter is not individuals versus nations; it is purpose. The text proves God's freedom to choose the line before works, but not by itself every detail of final reprobation.",
      academic:
        "Intertextual control matters: Romans 9:13 cites Malachi and echoes Genesis 25:23. The twins are central in Paul's rhetoric, yet the source frame remains covenant-historical and role-oriented, so this unit alone does not settle full final-destiny claims."
    },
    references: [
      {
        reference: "Romans 9:10-13 (KJV)",
        passage:
          "And not only this; but when Rebecca also had conceived by one, even by our father Isaac; (For the children being not yet born, neither having done any good or evil, that the purpose of God according to election might stand, not of works, but of him that calleth;) It was said unto her, The elder shall serve the younger. As it is written, Jacob have I loved, but Esau have I hated."
      },
      {
        reference: "Genesis 25:23 (KJV)",
        passage:
          "And the LORD said unto her, Two nations are in thy womb, and two manner of people shall be separated from thy bowels; and the one people shall be stronger than the other people; and the elder shall serve the younger."
      },
      {
        reference: "Malachi 1:2-4 (KJV)",
        passage:
          "I have loved you, saith the LORD. Yet ye say, Wherein hast thou loved us? Was not Esau Jacob's brother? saith the LORD: yet I loved Jacob, And I hated Esau, and laid his mountains and his heritage waste for the dragons of the wilderness. Whereas Edom saith, We are impoverished, but we will return and build the desolate places; thus saith the LORD of hosts, They shall build, but I will throw down."
      },
      {
        reference: "Romans 9:30-32 (KJV)",
        passage:
          "What shall we say then? That the Gentiles, which followed not after righteousness, have attained to righteousness, even the righteousness which is of faith. But Israel, which followed after the law of righteousness, hath not attained to the law of righteousness. Wherefore? Because they sought it not by faith, but as it were by the works of the law."
      }
    ]
  },
  {
    title: "Romans 9:19-24 (Potter and Vessels)",
    claimLabel: "Calvinist Reading",
    responseLabel: "Response",
    claim:
      "The potter-clay analogy shows God's absolute right to form some individuals for mercy and others for destruction.",
    tones: {
      pastoral:
        "Paul's rebuke in Romans 9 is strong and clearly teaches God's rights over the clay. That must be granted. But verse 22 also stresses endured with much longsuffering, and Paul still keeps repentance language active nearby.",
      debate:
        "Reformed readers are right that same lump and vessels can sound strongly individual. The counter is textual pattern: verse 22 uses what if, longsuffering, and fitted language; verse 23 explicitly says God afore prepared mercy vessels. That supports judicial hardening without requiring a strict symmetric decree.",
      academic:
        "The potter metaphor should be read with both context and intertext: Jeremiah 18 adds judicial contingency, while Romans 9:22-23 adds hypothetical framing, longsuffering, and non-identical preparation language. Together these features complicate a strict symmetric reprobation reading."
    },
    references: [
      {
        reference: "Romans 9:19-24 (KJV)",
        passage:
          "Thou wilt say then unto me, Why doth he yet find fault? For who hath resisted his will? Nay but, O man, who art thou that repliest against God? Shall the thing formed say to him that formed it, Why hast thou made me thus? Hath not the potter power over the clay, of the same lump to make one vessel unto honour, and another unto dishonour? What if God, willing to shew his wrath, and to make his power known, endured with much longsuffering the vessels of wrath fitted to destruction: And that he might make known the riches of his glory on the vessels of mercy, which he had afore prepared unto glory,"
      },
      {
        reference: "Jeremiah 18:6-10 (KJV)",
        passage:
          "O house of Israel, cannot I do with you as this potter? saith the LORD. Behold, as the clay is in the potter's hand, so are ye in mine hand, O house of Israel. At what instant I shall speak concerning a nation, and concerning a kingdom, to pluck up, and to pull down, and to destroy it; If that nation, against whom I have pronounced, turn from their evil, I will repent of the evil that I thought to do unto them. And at what instant I shall speak concerning a nation, and concerning a kingdom, to build and to plant it; If it do evil in my sight, that it obey not my voice, then I will repent of the good, wherewith I said I would benefit them."
      },
      {
        reference: "Romans 2:4-5 (KJV)",
        passage:
          "Or despisest thou the riches of his goodness and forbearance and longsuffering; not knowing that the goodness of God leadeth thee to repentance? But after thy hardness and impenitent heart treasurest up unto thyself wrath against the day of wrath and revelation of the righteous judgment of God;"
      },
      {
        reference: "2 Timothy 2:20-21 (KJV)",
        passage:
          "But in a great house there are not only vessels of gold and of silver, but also of wood and of earth; and some to honour, and some to dishonour. If a man therefore purge himself from these, he shall be a vessel unto honour, sanctified, and meet for the master's use, and prepared unto every good work."
      },
      {
        reference: "Romans 10:21 (KJV)",
        passage:
          "But to Israel he saith, All day long I have stretched forth my hands unto a disobedient and gainsaying people."
      },
      {
        reference: "Romans 9:22-23 (KJV)",
        passage:
          "What if God, willing to shew his wrath, and to make his power known, endured with much longsuffering the vessels of wrath fitted to destruction: And that he might make known the riches of his glory on the vessels of mercy, which he had afore prepared unto glory,"
      }
    ]
  },
  {
    title: "John 6",
    claimLabel: "Calvinist Reading",
    responseLabel: "Response",
    claim:
      "Only those sovereignly drawn by the Father can come, proving irresistible grace and fixed election.",
    tones: {
      pastoral:
        "John 6 clearly teaches divine initiative: none can come unless drawn, and all given will come. But the same discourse also says seen me, and believe not, and speaks of hearing and learning, so refusal is still real in the text.",
      debate:
        "A serious Calvinist reading leans on John 6:37 and 6:44. A serious counter-reading must also lean on 6:36, 6:40, and 6:45, where coming is described through seeing, believing, hearing, and learning. The burden is to explain effectual grace without emptying those terms.",
      academic:
        "John 6 includes both initiative and response language: gift, drawing, hearing/learning, believing, and explicit unbelief statements. Any irresistible-grace model should explain how refusal language remains explanatorily meaningful, not merely descriptive."
    },
    references: [
      {
        reference: "John 6:44 (KJV)",
        passage:
          "No man can come to me, except the Father which hath sent me draw him: and I will raise him up at the last day."
      },
      {
        reference: "John 6:37 (KJV)",
        passage:
          "All that the Father giveth me shall come to me; and him that cometh to me I will in no wise cast out."
      },
      {
        reference: "John 6:40 (KJV)",
        passage:
          "And this is the will of him that sent me, that every one which seeth the Son, and believeth on him, may have everlasting life: and I will raise him up at the last day."
      },
      {
        reference: "John 6:45 (KJV)",
        passage:
          "It is written in the prophets, And they shall be all taught of God. Every man therefore that hath heard, and hath learned of the Father, cometh unto me."
      },
      {
        reference: "John 6:36 (KJV)",
        passage:
          "But I said unto you, That ye also have seen me, and believe not."
      },
      {
        reference: "John 6:64 (KJV)",
        passage:
          "But there are some of you that believe not. For Jesus knew from the beginning who they were that believed not, and who should betray him."
      },
      {
        reference: "John 12:32 (KJV)",
        passage:
          "And I, if I be lifted up from the earth, will draw all men unto me."
      },
      {
        reference: "John 5:40 (KJV)",
        passage: "And ye will not come to me, that ye might have life."
      }
    ]
  },
  {
    title: "Ephesians 1",
    claimLabel: "Calvinist Reading",
    responseLabel: "Response",
    claim:
      "Election before the foundation of the world proves individual unconditional predestination to salvation.",
    tones: {
      pastoral:
        "Ephesians 1 celebrates God's saving plan in Christ and the blessings believers now enjoy in him. The chapter also ties participation to hearing and believing the gospel, so we should not confuse the destiny of the in-Christ people with a no-response list of individuals.",
      debate:
        "Ephesians 1 describes the destiny of those in Christ, not an abstract decree with no reference to gospel faith. Verse 13 links inclusion to hearing and believing, which cuts against using this text as a direct proof of fixed individual salvation regardless of response.",
      academic:
        "The controlling phrase in Christ suggests a corporate-Christocentric election framework. Ephesians 1:13 introduces temporal appropriation through hearing and belief, indicating that group election language should not be automatically mapped onto unconditional individual conversion claims."
    },
    references: [
      {
        reference: "Ephesians 1:4-5 (KJV)",
        passage:
          "According as he hath chosen us in him before the foundation of the world, that we should be holy and without blame before him in love: Having predestinated us unto the adoption of children by Jesus Christ to himself, according to the good pleasure of his will."
      },
      {
        reference: "Ephesians 1:13 (KJV)",
        passage:
          "In whom ye also trusted, after that ye heard the word of truth, the gospel of your salvation: in whom also after that ye believed, ye were sealed with that holy Spirit of promise."
      },
      {
        reference: "1 Timothy 2:3-4 (KJV)",
        passage:
          "For this is good and acceptable in the sight of God our Saviour; Who will have all men to be saved, and to come unto the knowledge of the truth."
      }
    ]
  },
  {
    title: "John 10",
    claimLabel: "Calvinist Reading",
    responseLabel: "Response",
    claim:
      "You are not my sheep, therefore you cannot believe; election must precede faith in an exclusive sense.",
    tones: {
      pastoral:
        "John 10 distinguishes genuine followers from hostile hearers, but that does not cancel the broader gospel invitation and call to believe.",
      debate:
        "Reading John 10 as closed fatalism ignores wider Johannine material where belief is commanded and refusal is blamed.",
      academic:
        "John 10 identity language should be interpreted within the Gospel's larger belief-unbelief framework, not as an isolated metaphysical proof of immutable preclassification."
    },
    references: [
      {
        reference: "John 10:26-28 (KJV)",
        passage:
          "But ye believe not, because ye are not of my sheep, as I said unto you. My sheep hear my voice, and I know them, and they follow me: And I give unto them eternal life; and they shall never perish, neither shall any man pluck them out of my hand."
      },
      {
        reference: "John 10:16 (KJV)",
        passage:
          "And other sheep I have, which are not of this fold: them also I must bring, and they shall hear my voice; and there shall be one fold, and one shepherd."
      },
      {
        reference: "John 3:16 (KJV)",
        passage:
          "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."
      }
    ]
  },
  {
    title: "Acts 13:48",
    claimLabel: "Calvinist Reading",
    responseLabel: "Response",
    claim:
      "As many as were ordained to eternal life believed means specific individuals were appointed to faith beforehand.",
    tones: {
      pastoral:
        "Acts 13:48 is an important text on divine initiative and must be handled carefully. In the same scene, some also judge themselves unworthy of everlasting life. Luke presents both truths at once: God's appointment and human accountability.",
      debate:
        "The strongest Calvinist reading takes ordained as appointed by God to life. Even granting that, the line explains why believers believed; it does not explicitly explain why every rejecter could not believe. Verse 46 still assigns rejection to hearers themselves.",
      academic:
        "The lexical/syntactical debate around tetagmenoi should be read with immediate contrast: appointment language in v48 and explicit self-rejection in v46. A high-providence reading is textually plausible; a full reprobation-causality model is a further inference."
    },
    references: [
      {
        reference: "Acts 13:46-48 (KJV)",
        passage:
          "Then Paul and Barnabas waxed bold, and said, It was necessary that the word of God should first have been spoken to you: but seeing ye put it from you, and judge yourselves unworthy of everlasting life, lo, we turn to the Gentiles. For so hath the Lord commanded us, saying, I have set thee to be a light of the Gentiles, that thou shouldest be for salvation unto the ends of the earth. And when the Gentiles heard this, they were glad, and glorified the word of the Lord: and as many as were ordained to eternal life believed."
      },
      {
        reference: "Acts 13:43 (KJV)",
        passage:
          "Now when the congregation was broken up, many of the Jews and religious proselytes followed Paul and Barnabas: who, speaking to them, persuaded them to continue in the grace of God."
      },
      {
        reference: "Acts 17:30 (KJV)",
        passage:
          "And the times of this ignorance God winked at; but now commandeth all men every where to repent:"
      },
      {
        reference: "1 Timothy 2:4 (KJV)",
        passage:
          "Who will have all men to be saved, and to come unto the knowledge of the truth."
      }
    ]
  },
  {
    title: "Romans 8:29-30",
    claimLabel: "Calvinist Reading",
    responseLabel: "Response",
    claim:
      "The golden chain proves an exhaustive predestinarian system where all outcomes are fixed for a closed elect set.",
    tones: {
      pastoral:
        "Romans 8 gives deep comfort to believers, but comforting assurance does not require denying the many warning texts that call believers to continue. Predestination here is to conformity to Christ for those in him, not a stand-alone denial of response language elsewhere.",
      debate:
        "Using Romans 8 as a system lock ignores conditional perseverance language elsewhere in the New Testament and confuses a believer-group assurance text with an all-individuals deterministic blueprint.",
      academic:
        "Romans 8:29-30 should be read as assurance discourse for the faithful, not necessarily as a full metaphysical map that nullifies every conditional warning passage. The text can mark the eschatological destiny of the believing community without settling every question of individual pre-conversion causality."
    },
    references: [
      {
        reference: "Romans 8:29-30 (KJV)",
        passage:
          "For whom he did foreknow, he also did predestinate to be conformed to the image of his Son, that he might be the firstborn among many brethren. Moreover whom he did predestinate, them he also called: and whom he called, them he also justified: and whom he justified, them he also glorified."
      },
      {
        reference: "Romans 11:22 (KJV)",
        passage:
          "Behold therefore the goodness and severity of God: on them which fell, severity; but toward thee, goodness, if thou continue in his goodness: otherwise thou also shalt be cut off."
      },
      {
        reference: "Hebrews 3:14 (KJV)",
        passage:
          "For we are made partakers of Christ, if we hold the beginning of our confidence stedfast unto the end."
      }
    ]
  },
  {
    title: "Ephesians 2:8-9",
    claimLabel: "Calvinist Reading",
    responseLabel: "Response",
    claim:
      "Faith is a unilateral gift only given to the elect, so human response language is ultimately non-meaningful.",
    tones: {
      pastoral:
        "Salvation is fully by grace, yet Scripture still calls people to believe and treats that call as sincerely addressed to hearers.",
      debate:
        "Grace alone does not imply faith is irresistibly injected into a preselected group; the text itself does not make that leap.",
      academic:
        "Ephesians 2:8-9 affirms grace-based salvation and excludes boasting, but the passage does not by itself settle debates over the mechanics and scope of faith enablement."
    },
    references: [
      {
        reference: "Ephesians 2:8-9 (KJV)",
        passage:
          "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast."
      },
      {
        reference: "Romans 10:17 (KJV)",
        passage:
          "So then faith cometh by hearing, and hearing by the word of God."
      },
      {
        reference: "Acts 16:31 (KJV)",
        passage:
          "And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house."
      }
    ]
  }
];

const commonRepliesData = [
  {
    title: "'All' means all kinds, not all people",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "Universal words such as all and world usually mean all kinds of people, not every individual.",
    tones: {
      pastoral:
        "Context can narrow terms, but we should not narrow them by default. Several passages read naturally as broad provision and broad invitation.",
      debate:
        "This move often feels ad hoc: universal terms are narrowed whenever they conflict with system commitments.",
      academic:
        "Semantic restriction is legitimate when context requires it; however, consistent restrictive readings across multiple universal texts require stronger contextual warrants than are often presented."
    },
    references: [
      {
        reference: "1 John 2:2 (KJV)",
        passage:
          "And he is the propitiation for our sins: and not for ours only, but also for the sins of the whole world."
      },
      {
        reference: "1 Timothy 2:1-4 (KJV)",
        passage:
          "I exhort therefore, that, first of all, supplications, prayers, intercessions, and giving of thanks, be made for all men; For kings, and for all that are in authority; that we may lead a quiet and peaceable life in all godliness and honesty. For this is good and acceptable in the sight of God our Saviour; Who will have all men to be saved, and to come unto the knowledge of the truth."
      }
    ]
  },
  {
    title: "Corporate election is not identical to fixed individual salvation",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "Corporate election in Christ includes concrete persons, so group election language naturally implies specific elect individuals, not an abstract class.",
    tones: {
      pastoral:
        "This is a fair concern: a chosen people includes real people. The key is to read group-destiny texts together with passages showing how people enter and continue through hearing and believing.",
      debate:
        "The issue is not corporate versus individual. The gap appears when group language is used to settle every detail of individual conversion before other texts are considered.",
      academic:
        "Corporate-election texts define the covenant people and their goal in Christ, while inclusion texts describe hearing, faith, and perseverance. A coherent model should integrate both levels."
    },
    references: [
      {
        reference: "Ephesians 1:4-5 (KJV)",
        passage:
          "According as he hath chosen us in him before the foundation of the world, that we should be holy and without blame before him in love: Having predestinated us unto the adoption of children by Jesus Christ to himself, according to the good pleasure of his will."
      },
      {
        reference: "Ephesians 1:13 (KJV)",
        passage:
          "In whom ye also trusted, after that ye heard the word of truth, the gospel of your salvation: in whom also after that ye believed, ye were sealed with that holy Spirit of promise."
      },
      {
        reference: "1 Peter 2:9 (KJV)",
        passage:
          "But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light:"
      }
    ]
  },
  {
    title: "Two kinds of divine love resolve all contradictions",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "God's benevolent love toward all and covenant-redemptive love toward the elect explain universal-love texts without surrendering particular election.",
    tones: {
      pastoral:
        "This distinction can be a sincere effort to honor all texts, and that should be acknowledged. The concern is when it overrides plain invitation and warning texts too quickly.",
      debate:
        "Layered-love categories are not automatically evasive, but they need close textual control. If every universal text is narrowed by default, the model can become system-protection rather than exegesis.",
      academic:
        "A multi-aspect doctrine of divine love can be coherent, but method matters. The distinction must be shown from each context, not used as a master key that settles every disputed text in advance."
    },
    references: [
      {
        reference: "John 3:16 (KJV)",
        passage:
          "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."
      },
      {
        reference: "Ephesians 2:3 (KJV)",
        passage:
          "Among whom also we all had our conversation in times past in the lusts of our flesh, fulfilling the desires of the flesh and of the mind; and were by nature the children of wrath, even as others."
      },
      {
        reference: "Romans 11:28 (KJV)",
        passage:
          "As concerning the gospel, they are enemies for your sakes: but as touching the election, they are beloved for the fathers' sakes."
      },
      {
        reference: "Matthew 5:45 (KJV)",
        passage:
          "That ye may be the children of your Father which is in heaven: for he maketh his sun to rise on the evil and on the good, and sendeth rain on the just and on the unjust."
      }
    ]
  },
  {
    title: "You reject Calvinism because you misunderstand it",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "The critique fails because opponents are misrepresenting Calvinism rather than addressing its real claims.",
    tones: {
      pastoral:
        "We should represent each other fairly, cite real sources, and avoid caricatures. But disagreement can still be legitimate after careful hearing.",
      debate:
        "Calling every objection a strawman can become a shield against substantive textual and logical testing, especially when Calvinist variants disagree among themselves.",
      academic:
        "Hermeneutical and theological disputes should be adjudicated by transparent definitions, primary-source claims, and exegetical argument rather than gatekeeping labels."
    },
    references: [
      {
        reference: "Proverbs 18:13 (KJV)",
        passage:
          "He that answereth a matter before he heareth it, it is folly and shame unto him."
      },
      {
        reference: "Acts 17:11 (KJV)",
        passage:
          "These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily, whether those things were so."
      },
      {
        reference: "1 Thessalonians 5:21 (KJV)",
        passage:
          "Prove all things; hold fast that which is good."
      }
    ]
  },
  {
    title: "Atonement and salvation are the same act",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "Christ's death did not merely make salvation possible; it infallibly secured redemption for the exact people for whom he died.",
    tones: {
      pastoral:
        "It is right to insist the cross truly saves and does not fail. Scripture also distinguishes what Christ accomplished from how remission is applied through faith, which avoids both mere possibility and universalism.",
      debate:
        "A strong non-Calvinist answer should grant strong efficacy language, then keep categories clear: sufficient for all, savingly effective for believers. That keeps broad propitiation language without forcing universal salvation.",
      academic:
        "Reformed impetration/application distinctions can be coherent and should be acknowledged. The critique targets versions that collapse categories; the New Testament repeatedly pairs accomplished redemption language with faith-conditioned remission and condemnation-for-unbelief."
    },
    references: [
      {
        reference: "John 10:11 (KJV)",
        passage:
          "I am the good shepherd: the good shepherd giveth his life for the sheep."
      },
      {
        reference: "1 John 2:2 (KJV)",
        passage:
          "And he is the propitiation for our sins: and not for ours only, but also for the sins of the whole world."
      },
      {
        reference: "John 3:16 (KJV)",
        passage:
          "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."
      },
      {
        reference: "Acts 16:31 (KJV)",
        passage:
          "And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house."
      },
      {
        reference: "John 3:18 (KJV)",
        passage:
          "He that believeth on him is not condemned: but he that believeth not is condemned already, because he hath not believed in the name of the only begotten Son of God."
      },
      {
        reference: "1 Timothy 4:10 (KJV)",
        passage:
          "For therefore we both labour and suffer reproach, because we trust in the living God, who is the Saviour of all men, specially of those that believe."
      },
      {
        reference: "2 Peter 2:1 (KJV)",
        passage:
          "But there were false prophets also among the people, even as there shall be false teachers among you, who privily shall bring in damnable heresies, even denying the Lord that bought them, and bring upon themselves swift destruction."
      }
    ]
  },
  {
    title: "Finding favor with God before conversion means earning salvation",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "If someone seeks God before conversion, that would make salvation earned rather than gracious.",
    tones: {
      pastoral:
        "Seeking God does not earn grace. In Acts, Cornelius's story starts with God's initiative, yet he still must hear and believe the gospel to receive remission.",
      debate:
        "This objection rightly guards against merit theology, but it overreaches by treating preparatory response as earning. Cornelius still needed gospel words whereby he would be saved.",
      academic:
        "Acts distinguishes pre-conversion reverence from conversion-event faith and remission while explicitly narrating divine initiation. This avoids both merit theology and flattening all pre-conversion categories."
    },
    references: [
      {
        reference: "Acts 10:34-35 (KJV)",
        passage:
          "Then Peter opened his mouth, and said, Of a truth I perceive that God is no respecter of persons: But in every nation he that feareth him, and worketh righteousness, is accepted with him."
      },
      {
        reference: "Acts 10:2 (KJV)",
        passage:
          "A devout man, and one that feared God with all his house, which gave much alms to the people, and prayed to God alway."
      },
      {
        reference: "Acts 10:3 (KJV)",
        passage:
          "He saw in a vision evidently about the ninth hour of the day an angel of God coming in to him, and saying unto him, Cornelius."
      },
      {
        reference: "Acts 10:43 (KJV)",
        passage:
          "To him give all the prophets witness, that through his name whosoever believeth in him shall receive remission of sins."
      },
      {
        reference: "Acts 11:14 (KJV)",
        passage:
          "Who shall tell thee words, whereby thou and all thy house shall be saved."
      },
      {
        reference: "Acts 16:14 (KJV)",
        passage:
          "And a certain woman named Lydia, a seller of purple, of the city of Thyatira, which worshipped God, heard us: whose heart the Lord opened, that she attended unto the things which were spoken of Paul."
      }
    ]
  },
  {
    title: "Permission language alone removes divine culpability tension",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "Distinguishing decree, permission, and secondary causes fully protects God's holiness even if all events are comprehensively ordained.",
    tones: {
      pastoral:
        "These categories can be useful and should not be mocked. A clear model says God governs events and overrules evil for good, while creatures alone own sinful intent.",
      debate:
        "Using permit instead of ordain does not solve culpability by itself. You still need a clear asymmetry account: one event can be evil in human intent and righteous in God's intent, without making God the author of sin.",
      academic:
        "A coherent providence account should affirm concurrence with asymmetry: divine ordination of events, creaturely agency for evil, and non-identical moral intentions within the same act."
    },
    references: [
      {
        reference: "Acts 2:23 (KJV)",
        passage:
          "Him, being delivered by the determinate counsel and foreknowledge of God, ye have taken, and by wicked hands have crucified and slain:"
      },
      {
        reference: "James 1:13 (KJV)",
        passage:
          "Let no man say when he is tempted, I am tempted of God: for God cannot be tempted with evil, neither tempteth he any man:"
      },
      {
        reference: "Habakkuk 1:13 (KJV)",
        passage:
          "Thou art of purer eyes than to behold evil, and canst not look on iniquity."
      },
      {
        reference: "Genesis 50:20 (KJV)",
        passage:
          "But as for you, ye thought evil against me; but God meant it unto good, to bring to pass, as it is this day, to save much people alive."
      },
      {
        reference: "1 John 1:5 (KJV)",
        passage:
          "This then is the message which we have heard of him, and declare unto you, that God is light, and in him is no darkness at all."
      }
    ]
  },
  {
    title: "God has two wills, so no contradiction exists",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "God's revealed will commands all to repent while his decretive will determines whatsoever comes to pass, so no contradiction remains.",
    tones: {
      pastoral:
        "The revealed/decretive distinction is a serious theological tool, not a cheap dodge. The question is whether revealed commands and invitations still keep their full practical force.",
      debate:
        "A strong Reformed case can read us-ward in 2 Peter 3:9 more narrowly. Even then, Acts 17:30 and 1 Timothy 2 still require a clear account of sincere universal command and offer.",
      academic:
        "The preceptive/decretive distinction has real historical and theological value. Its adequacy should be tested by whether it preserves the stated scope of repentance-command and ransom-for-all passages."
    },
    references: [
      {
        reference: "Deuteronomy 29:29 (KJV)",
        passage:
          "The secret things belong unto the LORD our God: but those things which are revealed belong unto us and to our children for ever, that we may do all the words of this law."
      },
      {
        reference: "2 Peter 3:9 (KJV)",
        passage:
          "The Lord is not slack concerning his promise, as some men count slackness; but is longsuffering to us-ward, not willing that any should perish, but that all should come to repentance."
      },
      {
        reference: "Acts 17:30 (KJV)",
        passage:
          "And the times of this ignorance God winked at; but now commandeth all men every where to repent:"
      },
      {
        reference: "Ezekiel 18:23 (KJV)",
        passage:
          "Have I any pleasure at all that the wicked should die? saith the Lord GOD: and not that he should return from his ways, and live?"
      },
      {
        reference: "1 Timothy 2:1-6 (KJV)",
        passage:
          "I exhort therefore, that, first of all, supplications, prayers, intercessions, and giving of thanks, be made for all men; For kings, and for all that are in authority; that we may lead a quiet and peaceable life in all godliness and honesty. For this is good and acceptable in the sight of God our Saviour; Who will have all men to be saved, and to come unto the knowledge of the truth. For there is one God, and one mediator between God and men, the man Christ Jesus; Who gave himself a ransom for all, to be testified in due time."
      }
    ]
  },
  {
    title: "'Who are you, O man?' ends the discussion",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "Human objections to election are invalid by definition; we are not permitted to challenge the doctrine's moral coherence.",
    tones: {
      pastoral:
        "Humility before God is right, but Scripture also invites careful reasoning and testing of what is taught.",
      debate:
        "Invoking mystery is not the same as answering the objection; it can shut down valid textual and logical analysis.",
      academic:
        "Appeals to creaturely limitation do not remove the need for coherent exegesis and theological consistency across the canon."
    },
    references: [
      {
        reference: "Romans 9:20-21 (KJV)",
        passage:
          "Nay but, O man, who art thou that repliest against God? Shall the thing formed say to him that formed it, Why hast thou made me thus? Hath not the potter power over the clay, of the same lump to make one vessel unto honour, and another unto dishonour?"
      },
      {
        reference: "Acts 17:11 (KJV)",
        passage:
          "These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily, whether those things were so."
      },
      {
        reference: "1 Thessalonians 5:21 (KJV)",
        passage:
          "Prove all things; hold fast that which is good."
      }
    ]
  },
  {
    title: "If grace can be resisted, salvation depends on man",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "Any non-irresistible model makes human choice the decisive savior and diminishes grace.",
    tones: {
      pastoral:
        "Receiving a gift does not mean earning a gift. Scripture can affirm both grace as the source and faith as a real response.",
      debate:
        "This is a false dilemma: either monergistic irresistibility or works-righteousness. The New Testament presents grace plus accountable response.",
      academic:
        "Synergistic response does not entail merit causation. One can preserve grace primacy while retaining meaningful human assent and resistance categories."
    },
    references: [
      {
        reference: "Ephesians 2:8-9 (KJV)",
        passage:
          "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast."
      },
      {
        reference: "Acts 7:51 (KJV)",
        passage:
          "Ye stiffnecked and uncircumcised in heart and ears, ye do always resist the Holy Ghost: as your fathers did, so do ye."
      },
      {
        reference: "John 1:12 (KJV)",
        passage:
          "But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name."
      }
    ]
  },
  {
    title: "Warnings are only means, not real danger",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "Warning passages are instruments God uses for the elect, not statements about any true risk.",
    tones: {
      pastoral:
        "God may use warnings as means, but believers are still taught to hear them as real cautions with real consequences if ignored.",
      debate:
        "If the threatened outcome cannot happen, warning language is reduced to theater rather than warning.",
      academic:
        "Instrumental-warning models should still explain why warning texts adopt direct contingency forms that appear to address genuine risk conditions."
    },
    references: [
      {
        reference: "Hebrews 3:12 (KJV)",
        passage:
          "Take heed, brethren, lest there be in any of you an evil heart of unbelief, in departing from the living God."
      },
      {
        reference: "1 Corinthians 10:12 (KJV)",
        passage:
          "Wherefore let him that thinketh he standeth take heed lest he fall."
      },
      {
        reference: "Colossians 1:22-23 (KJV)",
        passage:
          "In the body of his flesh through death, to present you holy and unblameable and unreproveable in his sight: If ye continue in the faith grounded and settled, and be not moved away from the hope of the gospel."
      }
    ]
  },
  {
    title: "The spiritually dead cannot respond at all",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "Dead in sin means absolute inability in every sense, so non-elect hearers cannot meaningfully respond to gospel calls.",
    tones: {
      pastoral:
        "Scripture uses dead language for serious spiritual condition, but it still calls sinners to repent and return and treats refusal as blameworthy.",
      debate:
        "Dead does not have to mean metaphysically incapable in every sense; the same Bible uses dead-alive language relationally and morally.",
      academic:
        "Metaphorical death language should be interpreted by discourse function, not automatically mapped to total anthropological incapacity in all domains."
    },
    references: [
      {
        reference: "Ephesians 2:1 (KJV)",
        passage:
          "And you hath he quickened, who were dead in trespasses and sins."
      },
      {
        reference: "Luke 15:24 (KJV)",
        passage:
          "For this my son was dead, and is alive again; he was lost, and is found. And they began to be merry."
      },
      {
        reference: "Acts 17:30 (KJV)",
        passage:
          "And the times of this ignorance God winked at; but now commandeth all men every where to repent:"
      }
    ]
  }
];

const replacementTheologyData = [
  {
    title: "God Has Not Cast Away Israel",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "Because many Jews rejected Christ, God permanently rejected Israel and transferred all covenant identity to the Church.",
    tones: {
      pastoral:
        "The New Testament directly says God has not cast away his people and warns Gentile believers against boasting over natural branches.",
      debate:
        "Paul explicitly rejects total rejection language. Romans 11 says Israel's stumbling is not final and warns Gentiles not to act as replacement victors.",
      academic:
        "Romans 11 formally denies total divine rejection of Israel and frames current hardening as partial and temporary within a larger redemptive sequence."
    },
    references: [
      {
        reference: "Romans 11:1-2 (KJV)",
        passage:
          "I say then, Hath God cast away his people? God forbid. For I also am an Israelite, of the seed of Abraham, of the tribe of Benjamin. God hath not cast away his people which he foreknew."
      },
      {
        reference: "Romans 11:11 (KJV)",
        passage:
          "I say then, Have they stumbled that they should fall? God forbid: but rather through their fall salvation is come unto the Gentiles, for to provoke them to jealousy."
      },
      {
        reference: "Romans 11:18 (KJV)",
        passage:
          "Boast not against the branches. But if thou boast, thou bearest not the root, but the root thee."
      }
    ]
  },
  {
    title: "Israel's Hardening Is Partial and Temporary",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "Israel's role is over; there is no future turning of national Israel in biblical prophecy.",
    tones: {
      pastoral:
        "Paul says blindness in Israel is in part and tied to a time marker, which points away from permanent cancellation.",
      debate:
        "Replacement theology fails Paul's sequence: partial hardening until Gentile fullness, then all Israel shall be saved.",
      academic:
        "The discourse marker until in Romans 11:25 indicates temporal limitation rather than finalized displacement of Israel."
    },
    references: [
      {
        reference: "Romans 11:25-26 (KJV)",
        passage:
          "For I would not, brethren, that ye should be ignorant of this mystery, lest ye should be wise in your own conceits; that blindness in part is happened to Israel, until the fulness of the Gentiles be come in. And so all Israel shall be saved."
      },
      {
        reference: "Luke 21:24 (KJV)",
        passage:
          "And they shall fall by the edge of the sword, and shall be led away captive into all nations: and Jerusalem shall be trodden down of the Gentiles, until the times of the Gentiles be fulfilled."
      },
      {
        reference: "Zechariah 12:10 (KJV)",
        passage:
          "And I will pour upon the house of David, and upon the inhabitants of Jerusalem, the spirit of grace and of supplications: and they shall look upon me whom they have pierced."
      }
    ]
  },
  {
    title: "Covenant Promises Remain for Israel",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "Old Testament covenant promises to Israel are now only spiritual metaphors for the Church.",
    tones: {
      pastoral:
        "Scripture ties Israel's covenant future to God's own faithfulness, not to a cancellation clause.",
      debate:
        "Paul calls Israel still beloved for the fathers' sakes and says the gifts and calling of God are without repentance.",
      academic:
        "Romans 11:28-29 and Jeremiah's covenant language resist a total transfer model by grounding Israel's future in irrevocable divine commitment."
    },
    references: [
      {
        reference: "Romans 11:28-29 (KJV)",
        passage:
          "As concerning the gospel, they are enemies for your sakes: but as touching the election, they are beloved for the fathers' sakes. For the gifts and calling of God are without repentance."
      },
      {
        reference: "Jeremiah 31:36 (KJV)",
        passage:
          "If those ordinances depart from before me, saith the LORD, then the seed of Israel also shall cease from being a nation before me for ever."
      },
      {
        reference: "Jeremiah 33:26 (KJV)",
        passage:
          "Then will I cast away the seed of Jacob, and David my servant, so that I will not take any of his seed to be rulers over the seed of Abraham, Isaac, and Jacob: for I will cause their captivity to return, and have mercy on them."
      }
    ]
  },
  {
    title: "New Covenant Language Names Israel and Judah",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "The New Covenant erased Israel as a people and now belongs to the Church in a way that nullifies Israel-specific terms.",
    tones: {
      pastoral:
        "The Church shares in New Covenant blessings, but the covenant text itself still names the house of Israel and the house of Judah.",
      debate:
        "Replacement readings skip the plain wording of the covenant promise and force Israel-language into a total redefinition.",
      academic:
        "Hebrews cites Jeremiah's New Covenant formula without deleting its original covenant partners, suggesting participation without ethnic erasure."
    },
    references: [
      {
        reference: "Jeremiah 31:31 (KJV)",
        passage:
          "Behold, the days come, saith the LORD, that I will make a new covenant with the house of Israel, and with the house of Judah."
      },
      {
        reference: "Hebrews 8:8 (KJV)",
        passage:
          "For finding fault with them, he saith, Behold, the days come, saith the Lord, when I will make a new covenant with the house of Israel and with the house of Judah."
      },
      {
        reference: "Romans 11:27 (KJV)",
        passage:
          "For this is my covenant unto them, when I shall take away their sins."
      }
    ]
  },
  {
    title: "One in Christ Does Not Mean Israel Is Erased",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "Because believers are one in Christ, all Israel-Gentile distinctions and future Israel language are canceled.",
    tones: {
      pastoral:
        "Unity in Christ removes boasting and hostility, but it does not require deleting every biblical category or promise tied to Israel.",
      debate:
        "Galatians 3:28 is about equal standing in salvation, not a prophecy canceling Romans 11.",
      academic:
        "Soteriological unity and historical-eschatological distinction can coexist; Paul's letters maintain both realities in different discourse domains."
    },
    references: [
      {
        reference: "Galatians 3:28-29 (KJV)",
        passage:
          "There is neither Jew nor Greek, there is neither bond nor free, there is neither male nor female: for ye are all one in Christ Jesus. And if ye be Christ's, then are ye Abraham's seed, and heirs according to the promise."
      },
      {
        reference: "1 Corinthians 10:32 (KJV)",
        passage:
          "Give none offence, neither to the Jews, nor to the Gentiles, nor to the church of God."
      },
      {
        reference: "Romans 11:26 (KJV)",
        passage:
          "And so all Israel shall be saved."
      }
    ]
  },
  {
    title: "Land and Restoration Promises Are Not Empty Symbols",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "Israel's land and restoration promises were symbolic only and now have no future fulfillment language.",
    tones: {
      pastoral:
        "Many restoration texts speak concretely about regathering and dwelling in the land, which is hard to flatten into pure symbolism.",
      debate:
        "If God repeatedly names land, regathering, and national restoration, replacement-only readings are textually reductionist.",
      academic:
        "Prophetic restoration passages often carry territorial, agricultural, and national markers that resist total spiritualization."
    },
    references: [
      {
        reference: "Genesis 17:8 (KJV)",
        passage:
          "And I will give unto thee, and to thy seed after thee, the land wherein thou art a stranger, all the land of Canaan, for an everlasting possession; and I will be their God."
      },
      {
        reference: "Ezekiel 36:24 (KJV)",
        passage:
          "For I will take you from among the heathen, and gather you out of all countries, and will bring you into your own land."
      },
      {
        reference: "Amos 9:15 (KJV)",
        passage:
          "And I will plant them upon their land, and they shall no more be pulled up out of their land which I have given them, saith the LORD thy God."
      }
    ]
  },
  {
    title: "The Apostles Still Expected a Kingdom for Israel",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "After the resurrection, the apostles no longer expected any kingdom future tied to Israel.",
    tones: {
      pastoral:
        "Jesus did not rebuke the disciples for asking about restoring the kingdom to Israel; he redirected timing, not the category itself.",
      debate:
        "Acts 1 undercuts replacement certainty: timing is withheld, but Israel-restoration expectation is not denied.",
      academic:
        "Acts 1:6-7 preserves kingdom-Israel expectation while relocating epistemic access to the Father's timetable."
    },
    references: [
      {
        reference: "Acts 1:6-7 (KJV)",
        passage:
          "When they therefore were come together, they asked of him, saying, Lord, wilt thou at this time restore again the kingdom to Israel? And he said unto them, It is not for you to know the times or the seasons, which the Father hath put in his own power."
      },
      {
        reference: "Matthew 19:28 (KJV)",
        passage:
          "Ye also shall sit upon twelve thrones, judging the twelve tribes of Israel."
      },
      {
        reference: "Luke 22:30 (KJV)",
        passage:
          "That ye may eat and drink at my table in my kingdom, and sit on thrones judging the twelve tribes of Israel."
      }
    ]
  },
  {
    title: "The Church Is Grafted In, Not a Hostile Replacement",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "The Church replaced Israel as a new root, making Israel obsolete in God's redemptive storyline.",
    tones: {
      pastoral:
        "Paul's olive tree image says Gentiles are grafted in among them and warns against arrogance, which sounds like inclusion, not erasure.",
      debate:
        "Romans 11 destroys replacement triumphalism: Gentiles stand by faith and can be cut off, while natural branches can be grafted in again.",
      academic:
        "The olive tree metaphor maintains continuity of root and covenant history while allowing branch-level judgment and restoration."
    },
    references: [
      {
        reference: "Romans 11:17 (KJV)",
        passage:
          "And if some of the branches be broken off, and thou, being a wild olive tree, wert graffed in among them."
      },
      {
        reference: "Romans 11:23 (KJV)",
        passage:
          "And they also, if they abide not still in unbelief, shall be graffed in: for God is able to graff them in again."
      },
      {
        reference: "Ephesians 2:12-13 (KJV)",
        passage:
          "That at that time ye were without Christ, being aliens from the commonwealth of Israel, and strangers from the covenants of promise, having no hope, and without God in the world: But now in Christ Jesus ye who sometimes were far off are made nigh by the blood of Christ."
      }
    ]
  },
  {
    title: "One Tree Does Not Mean Israel Is Erased",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "Romans 11 teaches one olive tree, so there can be no distinct future for ethnic Israel.",
    tones: {
      pastoral:
        "Paul's one-tree image teaches covenant continuity and humility, but it still distinguishes natural branches and foretells Israel's future turning.",
      debate:
        "One tree refutes two-salvation systems, not Israel's future. Romans 11 still says blindness in part and all Israel shall be saved.",
      academic:
        "The olive-tree metaphor supports continuity of redemptive root while preserving branch-level distinctions and temporally structured restoration language."
    },
    references: [
      {
        reference: "Romans 11:17 (KJV)",
        passage:
          "And if some of the branches be broken off, and thou, being a wild olive tree, wert graffed in among them."
      },
      {
        reference: "Romans 11:25 (KJV)",
        passage:
          "For I would not, brethren, that ye should be ignorant of this mystery, lest ye should be wise in your own conceits; that blindness in part is happened to Israel, until the fulness of the Gentiles be come in."
      },
      {
        reference: "Romans 11:26 (KJV)",
        passage:
          "And so all Israel shall be saved."
      }
    ]
  },
  {
    title: "Spiritual-Israel Redefinition Is Not Paul's Only Category",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "Verses about inward circumcision prove Israel now only means the Church.",
    tones: {
      pastoral:
        "Paul teaches heart-level covenant reality, but he still speaks of Israel and Gentiles in distinguishable historical terms.",
      debate:
        "Romans 2 does not cancel Romans 11. Paul can affirm inward reality and still refer to ethnic Israel in prophecy.",
      academic:
        "Pauline inwardness language is anthropological and covenantal, yet Romans 11 and 1 Corinthians 10:32 preserve socio-ethnic distinction categories."
    },
    references: [
      {
        reference: "Romans 2:28-29 (KJV)",
        passage:
          "For he is not a Jew, which is one outwardly; neither is that circumcision, which is outward in the flesh: But he is a Jew, which is one inwardly; and circumcision is that of the heart, in the spirit, and not in the letter; whose praise is not of men, but of God."
      },
      {
        reference: "Galatians 6:16 (KJV)",
        passage:
          "And as many as walk according to this rule, peace be on them, and mercy, and upon the Israel of God."
      },
      {
        reference: "Luke 22:20 (KJV)",
        passage:
          "Likewise also the cup after supper, saying, This cup is the new testament in my blood, which is shed for you."
      },
      {
        reference: "1 Corinthians 10:32 (KJV)",
        passage:
          "Give none offence, neither to the Jews, nor to the Gentiles, nor to the church of God."
      }
    ]
  },
  {
    title: "The Singular-Seed Argument Does Not Void National Promises",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "Galatians 3:16 proves all Abrahamic promise language terminates in Christ only, with no future for ethnic Israel.",
    tones: {
      pastoral:
        "Christ is the promised Seed, and all blessing flows through him, yet Scripture still speaks of God's covenant faithfulness toward Israel's historical line.",
      debate:
        "Appealing to singular seed cannot erase Paul's explicit statements about Israel's ongoing calling and future mercy.",
      academic:
        "The christological focus of Galatians 3:16 does not necessitate cancellation of corporate-national dimensions affirmed in Romans 11."
    },
    references: [
      {
        reference: "Galatians 3:16 (KJV)",
        passage:
          "Now to Abraham and his seed were the promises made. He saith not, And to seeds, as of many; but as of one, And to thy seed, which is Christ."
      },
      {
        reference: "Genesis 17:7 (KJV)",
        passage:
          "And I will establish my covenant between me and thee and thy seed after thee in their generations for an everlasting covenant."
      },
      {
        reference: "Romans 11:29 (KJV)",
        passage:
          "For the gifts and calling of God are without repentance."
      }
    ]
  },
  {
    title: "Universalized Land Language Does Not Cancel Specific Land Oaths",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "New Testament universal scope language means Canaan promises are fully transformed into non-geographic realities.",
    tones: {
      pastoral:
        "Scripture's global horizon is beautiful, but the prophets still speak concretely of return to the land God gave to Israel's fathers.",
      debate:
        "Expansion is not cancellation. Heir of the world does not delete own land language in restoration prophecy.",
      academic:
        "Universal inheritance motifs and territorial covenant motifs can be complementary rather than mutually exclusive."
    },
    references: [
      {
        reference: "Romans 4:13 (KJV)",
        passage:
          "For the promise, that he should be the heir of the world, was not to Abraham, or to his seed, through the law, but through the righteousness of faith."
      },
      {
        reference: "Hebrews 11:10 (KJV)",
        passage:
          "For he looked for a city which hath foundations, whose builder and maker is God."
      },
      {
        reference: "Hebrews 11:16 (KJV)",
        passage:
          "But now they desire a better country, that is, an heavenly: wherefore God is not ashamed to be called their God."
      },
      {
        reference: "Ezekiel 36:24 (KJV)",
        passage:
          "For I will take you from among the heathen, and gather you out of all countries, and will bring you into your own land."
      }
    ]
  },
  {
    title: "Conditional Tenure Warnings Do Not Nullify Restoration Promises",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "Because Israel could be expelled for disobedience, no covenantal expectation remains for national restoration.",
    tones: {
      pastoral:
        "The Bible includes both warning and mercy: exile warnings are real, and promised regathering mercy is real too.",
      debate:
        "Using judgment texts to erase restoration texts is selective reading. Torah and prophets include both.",
      academic:
        "Covenantal sanctions and covenantal restoration operate together in Deuteronomic theology; one does not automatically abrogate the other."
    },
    references: [
      {
        reference: "Leviticus 18:28 (KJV)",
        passage:
          "That the land spue not you out also, when ye defile it, as it spued out the nations that were before you."
      },
      {
        reference: "Deuteronomy 28:64 (KJV)",
        passage:
          "And the LORD shall scatter thee among all people, from the one end of the earth even unto the other."
      },
      {
        reference: "Deuteronomy 30:3-5 (KJV)",
        passage:
          "That then the LORD thy God will turn thy captivity, and have compassion upon thee, and will return and gather thee from all the nations, whither the LORD thy God hath scattered thee. If any of thine be driven out unto the outmost parts of heaven, from thence will the LORD thy God gather thee, and from thence will he fetch thee: And the LORD thy God will bring thee into the land which thy fathers possessed, and thou shalt possess it; and he will do thee good, and multiply thee above thy fathers."
      },
      {
        reference: "Jeremiah 31:36 (KJV)",
        passage:
          "If those ordinances depart from before me, saith the LORD, then the seed of Israel also shall cease from being a nation before me for ever."
      }
    ]
  },
  {
    title: "Joshua-Solomon Fulfillment Does Not Exhaust Future Restoration",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "Land promises were fully completed in Israel's early monarchy, so no future national fulfillment remains.",
    tones: {
      pastoral:
        "God truly kept his word in earlier stages, yet later Scripture still speaks of future, enduring restoration.",
      debate:
        "Past fulfillment does not equal total fulfillment. Amos still promises no more uprooting.",
      academic:
        "Initial historical realization and later eschatological consummation can coexist without contradiction."
    },
    references: [
      {
        reference: "Joshua 21:43 (KJV)",
        passage:
          "And the LORD gave unto Israel all the land which he sware to give unto their fathers; and they possessed it, and dwelt therein."
      },
      {
        reference: "Joshua 21:45 (KJV)",
        passage:
          "There failed not ought of any good thing which the LORD had spoken unto the house of Israel; all came to pass."
      },
      {
        reference: "1 Kings 4:21 (KJV)",
        passage:
          "And Solomon reigned over all kingdoms from the river unto the land of the Philistines, and unto the border of Egypt."
      },
      {
        reference: "Amos 9:15 (KJV)",
        passage:
          "And I will plant them upon their land, and they shall no more be pulled up out of their land."
      }
    ]
  },
  {
    title: "AD 70 Did Not Exhaust Romans 11's Future Sequence",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "Most future Israel prophecies were fulfilled in AD 70, so there is no remaining national expectation.",
    tones: {
      pastoral:
        "AD 70 was a real judgment event, but Paul still describes a future sequence involving Gentile fullness and Israel's salvation.",
      debate:
        "AD 70 does not resolve Romans 11:25-26. The text itself points beyond a first-century endpoint.",
      academic:
        "Preterist compression must account for Paul's temporally structured until-then logic in Romans 11."
    },
    references: [
      {
        reference: "Matthew 24:34 (KJV)",
        passage:
          "Verily I say unto you, This generation shall not pass, till all these things be fulfilled."
      },
      {
        reference: "Luke 21:22 (KJV)",
        passage:
          "For these be the days of vengeance, that all things which are written may be fulfilled."
      },
      {
        reference: "Jeremiah 30:7 (KJV)",
        passage:
          "Alas! for that day is great, so that none is like it: it is even the time of Jacob's trouble; but he shall be saved out of it."
      },
      {
        reference: "Romans 11:25-26 (KJV)",
        passage:
          "Blindness in part is happened to Israel, until the fulness of the Gentiles be come in. And so all Israel shall be saved."
      }
    ]
  },
  {
    title: "Not of This World Does Not Mean No Future for Israel",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "Since Christ's kingdom is not of this world, restoration themes for Israel must be spiritualized.",
    tones: {
      pastoral:
        "Jesus taught the kingdom's source is not earthly power, yet he never canceled the apostles' expectation of Israel's restoration.",
      debate:
        "John 18:36 denies worldly origin, not eventual earthly expression under Christ's reign.",
      academic:
        "The kingdom's ontological origin and its historical manifestation should not be conflated as if mutually exclusive."
    },
    references: [
      {
        reference: "John 18:36 (KJV)",
        passage:
          "Jesus answered, My kingdom is not of this world."
      },
      {
        reference: "Acts 1:6-7 (KJV)",
        passage:
          "When they therefore were come together, they asked of him, saying, Lord, wilt thou at this time restore again the kingdom to Israel? And he said unto them, It is not for you to know the times or the seasons, which the Father hath put in his own power."
      },
      {
        reference: "Luke 22:30 (KJV)",
        passage:
          "That ye may eat and drink at my table in my kingdom, and sit on thrones judging the twelve tribes of Israel."
      }
    ]
  },
  {
    title: "Temple Symbolism Debates Do Not Remove Israel from Prophecy",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "Ezekiel's temple must be purely symbolic, so Israel-specific future expectations are no longer textual categories.",
    tones: {
      pastoral:
        "Faithful believers can disagree on temple details, but Ezekiel's language remains deeply tied to Israel's land and worship framework.",
      debate:
        "Declaring the whole vision symbolic does not erase the chapter's repeated territorial and covenant coordinates.",
      academic:
        "Typological interpretation should be disciplined by the text's sustained geographic and national specificity."
    },
    references: [
      {
        reference: "Ezekiel 40:2 (KJV)",
        passage:
          "In the visions of God brought he me into the land of Israel, and set me upon a very high mountain."
      },
      {
        reference: "Ezekiel 43:7 (KJV)",
        passage:
          "Son of man, the place of my throne, and the place of the soles of my feet, where I will dwell in the midst of the children of Israel for ever."
      },
      {
        reference: "Hebrews 10:14 (KJV)",
        passage:
          "For by one offering he hath perfected for ever them that are sanctified."
      }
    ]
  },
  {
    title: "Revelation's Tribal Details Resist Total Symbolic Erasure",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "Revelation's Israel language is purely symbolic for the Church with no enduring distinction.",
    tones: {
      pastoral:
        "Revelation uses symbolism, but naming tribes and also naming apostles suggests continuity with real covenant identities.",
      debate:
        "If Israel is fully dissolved into Church language, Revelation's explicit tribal indexing becomes unnecessary.",
      academic:
        "Apocalyptic symbolism does not require elimination of referential identity markers when the text deliberately retains them."
    },
    references: [
      {
        reference: "Revelation 7:4 (KJV)",
        passage:
          "And I heard the number of them which were sealed: and there were sealed an hundred and forty and four thousand of all the tribes of the children of Israel."
      },
      {
        reference: "Revelation 21:12 (KJV)",
        passage:
          "And had a wall great and high, and had twelve gates, and at the gates twelve angels, and names written thereon, which are the names of the twelve tribes of the children of Israel:"
      },
      {
        reference: "Revelation 21:14 (KJV)",
        passage:
          "And the wall of the city had twelve foundations, and in them the names of the twelve apostles of the Lamb."
      }
    ]
  },
  {
    title: "The 'Until' Clauses Point to More Than Permanent Replacement",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "Until-language in prophecy does not imply any future Israel-specific turning or restoration.",
    tones: {
      pastoral:
        "Biblical until-language normally marks a transition point; these passages should be read with that expectation in mind.",
      debate:
        "Replacement theology struggles with repeated until markers tied to Israel and Jerusalem.",
      academic:
        "The temporal semantics of until clauses in Luke 21, Matthew 23, and Romans 11 challenge flat finality readings."
    },
    references: [
      {
        reference: "Luke 21:24 (KJV)",
        passage:
          "Jerusalem shall be trodden down of the Gentiles, until the times of the Gentiles be fulfilled."
      },
      {
        reference: "Matthew 23:39 (KJV)",
        passage:
          "For I say unto you, Ye shall not see me henceforth, till ye shall say, Blessed is he that cometh in the name of the Lord."
      },
      {
        reference: "Romans 11:25 (KJV)",
        passage:
          "Blindness in part is happened to Israel, until the fulness of the Gentiles be come in."
      }
    ]
  },
  {
    title: "Literal-Curse, Symbolic-Blessing Hermeneutics Are Inconsistent",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "Israel's judgment texts are literal, but restoration texts should be spiritualized into Church realities.",
    tones: {
      pastoral:
        "We should read God's warnings and restorations with the same reverence and consistency, not with opposite literal standards.",
      debate:
        "Taking exile literally but regathering metaphorically is a method shift, not neutral exegesis.",
      academic:
        "Hermeneutical asymmetry across contiguous covenant texts risks system-driven rather than text-driven conclusions."
    },
    references: [
      {
        reference: "Leviticus 26:33 (KJV)",
        passage:
          "And I will scatter you among the heathen, and will draw out a sword after you: and your land shall be desolate, and your cities waste."
      },
      {
        reference: "Deuteronomy 30:3-5 (KJV)",
        passage:
          "That then the LORD thy God will turn thy captivity, and have compassion upon thee, and will return and gather thee from all the nations, whither the LORD thy God hath scattered thee. If any of thine be driven out unto the outmost parts of heaven, from thence will the LORD thy God gather thee, and from thence will he fetch thee: And the LORD thy God will bring thee into the land which thy fathers possessed, and thou shalt possess it; and he will do thee good, and multiply thee above thy fathers."
      },
      {
        reference: "Jeremiah 31:35-36 (KJV)",
        passage:
          "Thus saith the LORD, which giveth the sun for a light by day, and the ordinances of the moon and of the stars for a light by night, which divideth the sea when the waves thereof roar; The LORD of hosts is his name: If those ordinances depart from before me, saith the LORD, then the seed of Israel also shall cease from being a nation before me for ever."
      }
    ]
  },
  {
    title: "Zechariah 14 Is Difficult to Collapse into Past-Only Fulfillment",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "Jerusalem-centered future passages are either symbolic only or exhausted in earlier history.",
    tones: {
      pastoral:
        "Zechariah 14 presents strong future-oriented language that many readers see as still awaiting full realization.",
      debate:
        "Past-only models struggle with Zechariah 14's concrete mountain, nations, and worship sequence.",
      academic:
        "The chapter's geo-political and liturgical specificity creates pressure against purely retrospective or purely spiritualized closure."
    },
    references: [
      {
        reference: "Zechariah 14:4 (KJV)",
        passage:
          "And his feet shall stand in that day upon the mount of Olives, which is before Jerusalem on the east, and the mount of Olives shall cleave in the midst thereof toward the east and toward the west, and there shall be a very great valley."
      },
      {
        reference: "Zechariah 14:16 (KJV)",
        passage:
          "And it shall come to pass, that every one that is left of all the nations which came against Jerusalem shall even go up from year to year to worship the King, the LORD of hosts."
      },
      {
        reference: "Matthew 23:39 (KJV)",
        passage:
          "For I say unto you, Ye shall not see me henceforth, till ye shall say, Blessed is he that cometh in the name of the Lord."
      }
    ]
  },
  {
    title: "Recapitulation Readings Do Not Automatically Cancel Israel Markers",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "Revelation is cyclical symbolism only, so references to Israel and Armageddon cannot indicate any future Israel-related fulfillment.",
    tones: {
      pastoral:
        "Revelation certainly uses symbols, but symbols can still point to real future events and covenant identities.",
      debate:
        "Symbolic genre is not a license to erase explicit references whenever they challenge a system.",
      academic:
        "Apocalyptic recapitulation as a literary structure does not by itself settle referential scope for Israel-language passages."
    },
    references: [
      {
        reference: "Revelation 16:16 (KJV)",
        passage:
          "And he gathered them together into a place called in the Hebrew tongue Armageddon."
      },
      {
        reference: "Revelation 19:19 (KJV)",
        passage:
          "And I saw the beast, and the kings of the earth, and their armies, gathered together to make war against him that sat on the horse."
      },
      {
        reference: "Revelation 7:4 (KJV)",
        passage:
          "And I heard the number of them which were sealed: and there were sealed an hundred and forty and four thousand of all the tribes of the children of Israel."
      }
    ]
  },
  {
    title: "Obsolete Covenant Administration Does Not Mean Israel Is Obsolete",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "Hebrews 8:13 proves Israel's covenant identity is ended and permanently replaced by the Church.",
    tones: {
      pastoral:
        "Hebrews teaches covenant fulfillment in Christ, but that does not require saying God revoked every Israel-related promise in Romans 11.",
      debate:
        "New covenant administration replacing old does not equal national-erasure theology.",
      academic:
        "Hebrews' argument concerns covenant efficacy and priestly fulfillment, not an explicit cancellation thesis for Romans 11's future-Israel language."
    },
    references: [
      {
        reference: "Hebrews 8:13 (KJV)",
        passage:
          "In that he saith, A new covenant, he hath made the first old. Now that which decayeth and waxeth old is ready to vanish away."
      },
      {
        reference: "Jeremiah 31:31 (KJV)",
        passage:
          "Behold, the days come, saith the LORD, that I will make a new covenant with the house of Israel, and with the house of Judah."
      },
      {
        reference: "Romans 11:29 (KJV)",
        passage:
          "For the gifts and calling of God are without repentance."
      }
    ]
  },
  {
    title: "Not All Israel Is Israel Is Not a National-Cancellation Text",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "Romans 9:6 proves Israel now means only the spiritual elect with no future national reference.",
    tones: {
      pastoral:
        "Romans 9 clarifies remnant realities, but Paul still speaks later about Israel's partial hardening and future mercy.",
      debate:
        "Romans 9:6 cannot be weaponized against Romans 11:25-26 in the same discourse.",
      academic:
        "Paul's internal distinction in Romans 9 does not erase his later ethnic-historical referent for Israel in Romans 11."
    },
    references: [
      {
        reference: "Romans 9:6-7 (KJV)",
        passage:
          "For they are not all Israel, which are of Israel: Neither, because they are the seed of Abraham, are they all children."
      },
      {
        reference: "Romans 11:1-2 (KJV)",
        passage:
          "I say then, Hath God cast away his people? God forbid. For I also am an Israelite, of the seed of Abraham, of the tribe of Benjamin. God hath not cast away his people which he foreknew."
      },
      {
        reference: "Romans 11:25-26 (KJV)",
        passage:
          "Blindness in part is happened to Israel, until the fulness of the Gentiles be come in. And so all Israel shall be saved."
      }
    ]
  },
  {
    title: "One New Man Unity Does Not Remove Israel-Gentile Distinctions Everywhere",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "Ephesians 2:14-15 means all Israel-Gentile distinctions are dissolved in every prophetic and covenant sense.",
    tones: {
      pastoral:
        "Christ gives real unity in salvation, yet the apostles still use Israel and Gentile categories in their teaching context.",
      debate:
        "Unity in Christ is not identical to erasing every covenant-historical category.",
      academic:
        "Soteriological reconciliation language in Ephesians 2 does not by itself settle all eschatological referent debates."
    },
    references: [
      {
        reference: "Ephesians 2:14-15 (KJV)",
        passage:
          "For he is our peace, who hath made both one, and hath broken down the middle wall of partition between us; Having abolished in his flesh the enmity."
      },
      {
        reference: "Ephesians 2:12-13 (KJV)",
        passage:
          "That at that time ye were without Christ, being aliens from the commonwealth of Israel, and strangers from the covenants of promise, having no hope, and without God in the world: But now in Christ Jesus ye who sometimes were far off are made nigh by the blood of Christ."
      },
      {
        reference: "1 Corinthians 10:32 (KJV)",
        passage:
          "Give none offence, neither to the Jews, nor to the Gentiles, nor to the church of God."
      }
    ]
  },
  {
    title: "Acts 2 Davidic Fulfillment Does Not Cancel Israel-Restoration Expectation",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "Because Christ is now enthroned, all kingdom promises to Israel are already fulfilled in the Church age.",
    tones: {
      pastoral:
        "Acts 2 exalts Christ's present reign, and Acts 1 still leaves restoration timing in the Father's hands.",
      debate:
        "Present enthronement does not logically eliminate future restoration language Jesus left intact.",
      academic:
        "Inaugurated kingship and future consummation can be held together without collapsing one into the other."
    },
    references: [
      {
        reference: "Acts 2:29-33 (KJV)",
        passage:
          "Men and brethren, let me freely speak unto you of the patriarch David, that he is both dead and buried, and his sepulchre is with us unto this day. Therefore being a prophet, and knowing that God had sworn with an oath to him, that of the fruit of his loins, according to the flesh, he would raise up Christ to sit on his throne; He seeing this before spake of the resurrection of Christ, that his soul was not left in hell, neither his flesh did see corruption. This Jesus hath God raised up, whereof we all are witnesses. Therefore being by the right hand of God exalted, and having received of the Father the promise of the Holy Ghost, he hath shed forth this, which ye now see and hear."
      },
      {
        reference: "Acts 1:6-7 (KJV)",
        passage:
          "When they therefore were come together, they asked of him, saying, Lord, wilt thou at this time restore again the kingdom to Israel? And he said unto them, It is not for you to know the times or the seasons, which the Father hath put in his own power."
      },
      {
        reference: "Luke 1:32-33 (KJV)",
        passage:
          "The Lord God shall give unto him the throne of his father David: And he shall reign over the house of Jacob for ever."
      }
    ]
  },
  {
    title: "Zion Prophecies Are Not Exhausted by Church-Age Spiritualization",
    claimLabel: "Replacement Claim",
    responseLabel: "Response",
    claim:
      "Isaiah 2 and Micah 4 are fully realized now in symbolic church realities, not future Israel-linked fulfillment.",
    tones: {
      pastoral:
        "These passages celebrate God's future peace and instruction among nations, and many readers see remaining future elements not yet complete.",
      debate:
        "Total present fulfillment claims strain against obvious unfinished global-peace details in the text.",
      academic:
        "The prophetic horizon in Isaiah 2 and Micah 4 includes concrete international conditions that exceed straightforward present-age realization."
    },
    references: [
      {
        reference: "Isaiah 2:2-4 (KJV)",
        passage:
          "And it shall come to pass in the last days, that the mountain of the LORD'S house shall be established in the top of the mountains, and shall be exalted above the hills; and all nations shall flow unto it. And many people shall go and say, Come ye, and let us go up to the mountain of the LORD, to the house of the God of Jacob; and he will teach us of his ways, and we will walk in his paths: for out of Zion shall go forth the law, and the word of the LORD from Jerusalem. And he shall judge among the nations, and shall rebuke many people: and they shall beat their swords into plowshares, and their spears into pruninghooks: nation shall not lift up sword against nation, neither shall they learn war any more."
      },
      {
        reference: "Micah 4:1-3 (KJV)",
        passage:
          "But in the last days it shall come to pass, that the mountain of the house of the LORD shall be established in the top of the mountains, and it shall be exalted above the hills; and people shall flow unto it. And many nations shall come, and say, Come, and let us go up to the mountain of the LORD, and to the house of the God of Jacob; and he will teach us of his ways, and we will walk in his paths: for the law shall go forth of Zion, and the word of the LORD from Jerusalem. And he shall judge among many people, and rebuke strong nations afar off; and they shall beat their swords into plowshares, and their spears into pruninghooks: nation shall not lift up a sword against nation, neither shall they learn war any more."
      },
      {
        reference: "Zechariah 14:16 (KJV)",
        passage:
          "Every one that is left of all the nations which came against Jerusalem shall even go up from year to year to worship the King."
      }
    ]
  }
];

const glossaryData = [
  {
    term: "Election",
    definition:
      "God's choosing language in Scripture. The key debate is whether election is strictly unconditional for individuals or Christ-centered and connected to faith response.",
    references: ["Ephesians 1:4-5 (KJV)", "Romans 8:29-30 (KJV)"]
  },
  {
    term: "Corporate Election (In Christ)",
    definition:
      "A reading where Scripture describes the chosen people in Christ and their ordained destiny, while individuals enter that people through hearing and believing the gospel.",
    references: ["Ephesians 1:4-5 (KJV)", "Ephesians 1:13 (KJV)", "1 Peter 2:9 (KJV)"]
  },
  {
    term: "Jacob-Esau Citation Context",
    definition:
      "Romans 9:13 quotes Malachi's Jacob/Edom language and should be interpreted with its covenant-historical background, not by isolating one clause from its Old Testament frame.",
    references: ["Romans 9:10-13 (KJV)", "Genesis 25:23 (KJV)", "Malachi 1:2-4 (KJV)"]
  },
  {
    term: "Conflation (Theological)",
    definition:
      "Treating related but distinct biblical categories as if they are identical, such as atonement with salvation-application or seeking God with meriting salvation.",
    references: ["1 John 2:2 (KJV)", "Acts 16:31 (KJV)", "Ephesians 2:8-9 (KJV)"]
  },
  {
    term: "Foreknowledge",
    definition:
      "God's prior knowledge in salvation discussions. Calvinist and non-Calvinist readings differ on whether foreknowledge means foreloving decree or relational knowing with response in view.",
    references: ["Romans 8:29-30 (KJV)", "1 Peter 1:2 (KJV)"]
  },
  {
    term: "Providence",
    definition:
      "God's active governance of creation and history toward his purposes. The key debate is how providence relates to evil, human agency, and divine holiness.",
    references: ["Genesis 50:20 (KJV)", "James 1:13 (KJV)", "Habakkuk 1:13 (KJV)"]
  },
  {
    term: "Propitiation",
    definition:
      "A sacrifice that satisfies divine justice regarding sin. In this app, the main dispute is the scope of Christ's propitiatory provision.",
    references: ["1 John 2:2 (KJV)"]
  },
  {
    term: "Atonement",
    definition:
      "Christ's sacrificial death for sin. The central debate is whether atonement is limited in intent and scope or universally provided and conditionally received.",
    references: ["Hebrews 2:9 (KJV)", "John 3:16 (KJV)"]
  },
  {
    term: "Repentance",
    definition:
      "Turning to God from sin. Scripture presents repentance as broadly commanded, which is a key point in objections to strict inability models.",
    references: ["Acts 17:30 (KJV)", "2 Peter 3:9 (KJV)"]
  },
  {
    term: "Faith",
    definition:
      "Trust in Christ for salvation. Debates focus on whether faith is an irresistible implant for a fixed elect or a grace-enabled but resistible response.",
    references: ["Romans 10:17 (KJV)", "Acts 16:31 (KJV)"]
  },
  {
    term: "Grace",
    definition:
      "God's unmerited favor in salvation. The discussion is not whether grace saves, but how grace and human response relate in conversion.",
    references: ["Ephesians 2:8-9 (KJV)", "John 1:12 (KJV)"]
  },
  {
    term: "Perseverance",
    definition:
      "Continuing in faith to the end. The tension is between guaranteed perseverance claims and warning passages with real conditional language.",
    references: ["Hebrews 3:14 (KJV)", "Romans 11:22 (KJV)"]
  },
  {
    term: "Apostasy",
    definition:
      "Falling away after real participation in the covenant community or gospel life. Calvinist and non-Calvinist readings diverge sharply here.",
    references: ["Hebrews 6:4-6 (KJV)", "2 Peter 2:20-21 (KJV)"]
  },
  {
    term: "Monergism",
    definition:
      "The claim that God alone is the effective cause of regeneration and saving response. Critics argue some passages still attribute meaningful resistance and refusal to people.",
    references: ["John 6:44 (KJV)", "Acts 7:51 (KJV)"]
  },
  {
    term: "Synergism",
    definition:
      "The claim that salvation is by grace while still involving real human response enabled by grace. This does not require works-merit theology.",
    references: ["John 5:40 (KJV)", "Acts 16:31 (KJV)"]
  },
  {
    term: "Divine Impartiality",
    definition:
      "Scripture's declaration that God is no respecter of persons. This term is often discussed in relation to unconditional election claims.",
    references: ["Romans 2:11 (KJV)", "1 Timothy 2:3-4 (KJV)"]
  },
  {
    term: "Divine Culpability Tension",
    definition:
      "The challenge of explaining God's sovereign rule without making God the moral author of evil. Debate centers on decree, permission, and biblical holiness language.",
    references: ["James 1:13 (KJV)", "Habakkuk 1:13 (KJV)", "Genesis 50:20 (KJV)"]
  },
  {
    term: "Meticulous Determinism",
    definition:
      "The claim that every event, including sinful intentions, unfolds according to an exhaustive divine decree. Critics argue this creates severe moral and logical tensions.",
    references: ["Romans 9:19-24 (KJV)", "James 1:13 (KJV)"]
  },
  {
    term: "Lapsarian Ordering",
    definition:
      "An internal Calvinist debate over the logical order of God's decrees (for example, election, fall, and reprobation). It explains family differences inside Calvinism but does not settle exegesis by itself.",
    references: ["Romans 9:19-24 (KJV)", "1 Timothy 2:3-4 (KJV)", "James 1:13 (KJV)"]
  },
  {
    term: "Supersessionism",
    definition:
      "The claim that the Church replaces Israel as the exclusive covenant people in a way that ends Israel's future national role.",
    references: ["Romans 11:1-2 (KJV)", "Romans 11:29 (KJV)"]
  },
  {
    term: "Preterism",
    definition:
      "An eschatological framework that reads many prophecy texts as fulfilled in the first century, especially around AD 70.",
    references: ["Matthew 24:34 (KJV)", "Luke 21:22 (KJV)"]
  },
  {
    term: "Amillennialism",
    definition:
      "A framework that often reads the millennium and kingdom-restoration themes symbolically as present Church-age realities.",
    references: ["John 18:36 (KJV)", "Acts 1:6-7 (KJV)"]
  },
  {
    term: "Recapitulation",
    definition:
      "A reading approach to Revelation that sees repeated symbolic cycles rather than a strict future chronological sequence.",
    references: ["Revelation 7:4 (KJV)", "Revelation 21:12 (KJV)"]
  }
];

const objectionDrilldownData = [
  {
    title: "Universal Call vs Total Inability",
    steps: [
      {
        layer: "Layer 1",
        objection:
          "God commands all people everywhere to repent, so the call appears universal and serious.",
        calvinistReply:
          "The command reveals duty, not ability. Non-elect remain unable without effectual grace.",
        counterResponse:
          "Even granting duty-not-ability categories, the command still functions as a sincere public summons with accountable refusal, not as empty rhetoric.",
        references: ["Acts 17:30 (KJV)", "John 5:40 (KJV)"]
      },
      {
        layer: "Layer 2",
        objection:
          "Scripture says whosoever will may come, which sounds like an open offer.",
        calvinistReply:
          "Only the elect are made willing; whosoever will simply describes who actually comes.",
        counterResponse:
          "That reading can collapse invitation language into a closed subset and weaken the ordinary meaning of the offer.",
        references: ["Revelation 22:17 (KJV)", "Isaiah 55:1 (KJV)"]
      }
    ]
  },
  {
    title: "Atonement Scope Debate",
    steps: [
      {
        layer: "Layer 1",
        objection:
          "Passages say Christ died for the whole world and every man.",
        calvinistReply:
          "World or every often means all kinds of people, not every individual.",
        counterResponse:
          "Sometimes context narrows scope, but repeated narrowing across these texts can feel system-driven rather than context-driven.",
        references: ["1 John 2:2 (KJV)", "Hebrews 2:9 (KJV)"]
      },
      {
        layer: "Layer 2",
        objection:
          "If atonement is not provided for all in any sense, universal invitation may look inconsistent.",
        calvinistReply:
          "The offer is universal externally, while intent of atonement remains particular internally.",
        counterResponse:
          "A stronger non-Calvinist account can avoid universalism by distinguishing sufficiency and application: broad provision language with believer-specific saving application.",
        references: ["John 3:16 (KJV)", "John 3:18 (KJV)", "1 Timothy 4:10 (KJV)"]
      }
    ]
  },
  {
    title: "Irresistible Grace and Resistance Texts",
    steps: [
      {
        layer: "Layer 1",
        objection:
          "People are said to resist the Holy Ghost and refuse Christ.",
        calvinistReply:
          "That is resistance to outward call, not to inward effectual call of the elect.",
        counterResponse:
          "The distinction may be theological, but the passages themselves present real refusal language without that explicit split.",
        references: ["Acts 7:51 (KJV)", "John 5:40 (KJV)"]
      },
      {
        layer: "Layer 2",
        objection:
          "Jesus laments those he would gather, yet they would not.",
        calvinistReply:
          "This concerns covenantal leadership and temporal judgment, not salvific inability categories.",
        counterResponse:
          "Even granting context, the verse still reinforces a pattern of genuine divine willingness met by human refusal.",
        references: ["Matthew 23:37 (KJV)", "John 12:32 (KJV)"]
      }
    ]
  },
  {
    title: "Perseverance and Warning Passages",
    steps: [
      {
        layer: "Layer 1",
        objection:
          "Warning texts describe severe consequences if people fall away.",
        calvinistReply:
          "Warnings are means God uses to keep the elect, not proof that true believers can finally fall.",
        counterResponse:
          "That framework is possible, but it can reduce direct warning force and lived urgency in the text.",
        references: ["Hebrews 6:4-6 (KJV)", "Hebrews 3:14 (KJV)"]
      },
      {
        layer: "Layer 2",
        objection:
          "Conditional statements like if ye continue look genuinely contingent.",
        calvinistReply:
          "Conditionals describe evidences of real faith rather than uncertain outcomes for true believers.",
        counterResponse:
          "The language still reads as practical contingency to many readers, not only retrospective evidence language.",
        references: ["Colossians 1:22-23 (KJV)", "Romans 11:22 (KJV)"]
      }
    ]
  },
  {
    title: "Conflation Checks in Soteriology",
    steps: [
      {
        layer: "Layer 1",
        objection:
          "If Christ's atonement is real, then all categories of atonement and salvation must be identical.",
        calvinistReply:
          "Definite atonement teaches Christ's death actually secures redemption for a particular people, not merely a potential salvation pool.",
        counterResponse:
          "That claim is stronger than mere possibility and should be engaged at full strength. The counterpoint is category distinction: accomplishment is objective, while condemnation/remission language still tracks believing versus unbelief.",
        references: ["John 10:11 (KJV)", "Acts 16:31 (KJV)", "John 3:18 (KJV)"]
      },
      {
        layer: "Layer 2",
        objection:
          "Any pre-conversion God-seeking or reverence would imply salvation by merit.",
        calvinistReply:
          "If positive pre-conversion response is granted independent weight, grace appears conditioned by man and merit concerns re-enter.",
        counterResponse:
          "Preparatory Godward disposition is not equivalent to earning salvation. Acts narrates God's initiating action (angelic visitation) and still says Cornelius needed gospel words whereby he shall be saved.",
        references: ["Acts 10:2 (KJV)", "Acts 10:3 (KJV)", "Acts 11:14 (KJV)"]
      },
      {
        layer: "Layer 3",
        objection:
          "Every critique is invalid because opponents simply misrepresent Calvinism.",
        calvinistReply:
          "If a critic does not mirror my preferred formulation, the rebuttal can be dismissed.",
        counterResponse:
          "Fair representation is essential, but dismissal by label is not exegesis. Claims should be tested with transparent definitions and scripture-level argument.",
        references: ["Proverbs 18:13 (KJV)", "Acts 17:11 (KJV)", "1 Thessalonians 5:21 (KJV)"]
      }
    ]
  },
  {
    title: "Jacob and Esau in Romans 9",
    steps: [
      {
        layer: "Layer 1",
        objection:
          "Romans 9:13 proves two individuals were eternally loved and hated for salvation before birth.",
        calvinistReply:
          "Paul uses twins before birth to prove discriminating choice not based on works, and representative function does not remove individual implication.",
        counterResponse:
          "Individuals are real in Paul's argument, and that should be conceded. The Old Testament source frame still centers on covenant-line/service language, so Romans 9:13 alone does not finalize each brother's eternal destiny mechanics.",
        references: ["Romans 9:10-13 (KJV)", "Genesis 25:23 (KJV)", "Malachi 1:2-4 (KJV)"]
      },
      {
        layer: "Layer 2",
        objection:
          "If Jacob was elect before birth, he must have been in saving love from eternity in a way that settles individual salvation mechanics.",
        calvinistReply:
          "Layered categories of divine love and decree preserve both particular election and broad compassion language.",
        counterResponse:
          "Those distinctions may help and should be considered, but they cannot remove Paul's own wherefore and unbelief logic in Romans 9-10. The chapter must carry both sovereignty and accountability simultaneously.",
        references: ["Romans 9:19-21 (KJV)", "Romans 9:30-32 (KJV)", "Romans 10:9-13 (KJV)"]
      }
    ]
  }
];

const tulipDeterminismSlopeData = [
  {
    title: "Step Chain: How TULIP Can Drift Toward Determinism",
    steps: [
      {
        layer: "Step 1 - Total Inability (T)",
        objection:
          "If all non-regenerate hearers are unable to respond in any saving sense, universal calls become duty-statements without ordinary response capacity.",
        reply:
          "Determinist Inference: unbelief outcomes are fixed at the inability level before the command is heard.",
        counterResponse:
          "KJV commands and rebukes still address hearers as responsible responders. The text presents refusal as meaningful agency, not only programmed outcome.",
        references: ["Acts 17:30 (KJV)", "John 5:40 (KJV)"]
      },
      {
        layer: "Step 2 - Unconditional Election + Limited Atonement (U/L)",
        objection:
          "If election is fixed for individuals and atonement intent is limited to that same set, the beneficiary group is closed prior to faith-response texts.",
        reply:
          "Determinist Inference: salvation outcomes are settled before gospel encounter for each person.",
        counterResponse:
          "KJV passages still use broad-scope language and open proclamation forms. Any narrowing must be proven by context, not imported as a controlling assumption.",
        references: ["Ephesians 1:4-5 (KJV)", "1 Timothy 2:3-4 (KJV)", "1 John 2:2 (KJV)"]
      },
      {
        layer: "Step 3 - Irresistible Grace (I)",
        objection:
          "If the inward call is always effectual for the elect, rejection language is treated as only external resistance and never final resistance to saving grace.",
        reply:
          "Determinist Inference: the decisive conversion moment is unilateral and fixed for the elect alone.",
        counterResponse:
          "KJV resistance texts are direct and concrete. They describe divine willingness met by human refusal in ways that retain real response significance.",
        references: ["Acts 7:51 (KJV)", "Matthew 23:37 (KJV)"]
      },
      {
        layer: "Step 4 - Perseverance Lock (P)",
        objection:
          "If all true believers must infallibly persevere, warning passages are reduced to means language rather than real contingency.",
        reply:
          "Determinist Inference: future faithfulness outcomes are fixed, so warnings function as instruments only.",
        counterResponse:
          "KJV warning texts read as practical conditions addressed to real communities. Their force is strongest when continuation language is treated as genuine exhortation.",
        references: ["Hebrews 3:14 (KJV)", "Romans 11:22 (KJV)", "Colossians 1:22-23 (KJV)"]
      },
      {
        layer: "Step 5 - Endpoint Test: Determinism vs Moral Coherence",
        objection:
          "When TULIP claims are maximized, many conclude all decisive salvation outcomes were fixed for individuals regardless of proclaimed invitation language.",
        reply:
          "Determinist/Compatibilist Inference: divine determination and real human willing are compatible, so commands and blame remain meaningful under providence.",
        counterResponse:
          "That is the strongest Reformed answer and should be engaged directly. This slope test uses defined criteria, not libertarian assumptions: universal command force, genuine blame for refusal, and practical warning contingency. The concern is semantic reduction of those criteria into description-only language.",
        references: ["Acts 17:30 (KJV)", "John 5:40 (KJV)", "Hebrews 3:14 (KJV)", "Acts 2:23 (KJV)"]
      }
    ]
  }
];

const replacementDrilldownData = [
  {
    title: "Romans 9 and Israel Identity",
    steps: [
      {
        layer: "Layer 1",
        objection:
          "Romans 9:6 says not all Israel is Israel, so Israel now only means the spiritual people of God.",
        reply:
          "Paul redefines Israel by election, so national categories are no longer prophetic anchors.",
        counterResponse:
          "Romans 9 clarifies remnant identity, but Romans 11 still speaks of Israel's partial hardening and future salvation in sequence.",
        references: ["Romans 9:6-7 (KJV)", "Romans 11:25-26 (KJV)"]
      },
      {
        layer: "Layer 2",
        objection:
          "If Paul can redefine Israel once, he can do so consistently across all prophecy.",
        reply:
          "That is exactly why Church = Israel should be the default reading.",
        counterResponse:
          "Paul also preserves Jew/Gentile/Church distinctions and warns Gentiles not to boast against natural branches.",
        references: ["1 Corinthians 10:32 (KJV)", "Romans 11:17 (KJV)", "Romans 11:18 (KJV)"]
      }
    ]
  },
  {
    title: "Hebrews 8 and Covenant Obsolescence",
    steps: [
      {
        layer: "Layer 1",
        objection:
          "Hebrews 8:13 says the first covenant is obsolete, so Israel's covenant role is over.",
        reply:
          "Old-covenant structures are superseded; therefore national Israel has no continuing covenant category.",
        counterResponse:
          "Hebrews addresses covenant efficacy, while Romans still affirms ongoing calling and future mercy for Israel.",
        references: ["Hebrews 8:13 (KJV)", "Romans 11:29 (KJV)"]
      },
      {
        layer: "Layer 2",
        objection:
          "If the old covenant is obsolete, Israel/Judah wording in Jeremiah should be read spiritually now.",
        reply:
          "The Church inherits the promise substance and fulfills covenant intent.",
        counterResponse:
          "Jeremiah and Hebrews still name Israel and Judah explicitly; participation by Gentiles does not require erasure of named covenant parties.",
        references: ["Jeremiah 31:31 (KJV)", "Hebrews 8:8 (KJV)"]
      }
    ]
  },
  {
    title: "Unity Texts and Ethnic Distinction",
    steps: [
      {
        layer: "Layer 1",
        objection:
          "Ephesians 2 says Christ made both one, so Israel/Gentile distinctions should no longer matter.",
        reply:
          "One new man means all prior covenant distinctions are replaced in Christ.",
        counterResponse:
          "One new man explains reconciled access, not the elimination of every covenant-historical category in every context.",
        references: ["Ephesians 2:14-15 (KJV)", "Ephesians 2:12-13 (KJV)"]
      },
      {
        layer: "Layer 2",
        objection:
          "If distinctions remain in any sense, unity language is weakened.",
        reply:
          "Strong unity requires dissolving all former identity lines in prophetic interpretation.",
        counterResponse:
          "Scripture can present equal standing in Christ and still distinguish Jews, Gentiles, and the Church as discourse categories.",
        references: ["Galatians 3:28-29 (KJV)", "1 Corinthians 10:32 (KJV)"]
      }
    ]
  },
  {
    title: "Acts 2 Fulfillment vs Future Restoration",
    steps: [
      {
        layer: "Layer 1",
        objection:
          "Acts 2 proves the Davidic kingdom promises are fulfilled now in Christ's heavenly reign.",
        reply:
          "Therefore no future Israel-restoration expectation remains to be fulfilled.",
        counterResponse:
          "Acts 2 affirms present exaltation, but Acts 1 still preserves kingdom-restoration expectation while withholding timing.",
        references: ["Acts 2:29-33 (KJV)", "Acts 1:6-7 (KJV)"]
      },
      {
        layer: "Layer 2",
        objection:
          "Future restoration language is only apostolic misunderstanding corrected by Pentecost.",
        reply:
          "The church mission redefines restoration as global gospel spread.",
        counterResponse:
          "Jesus corrected timing, not the category itself; later texts still retain Israel-centered future language.",
        references: ["Luke 1:32-33 (KJV)", "Romans 11:25-26 (KJV)"]
      }
    ]
  },
  {
    title: "Prophetic and Apocalyptic Symbolization",
    steps: [
      {
        layer: "Layer 1",
        objection:
          "Isaiah 2 and Micah 4 are spiritually fulfilled in the Church age.",
        reply:
          "Prophecy language about Zion and nations should be interpreted symbolically now.",
        counterResponse:
          "These texts include global peace and war-ending motifs that many readers see as not yet fully realized.",
        references: ["Isaiah 2:2-4 (KJV)", "Micah 4:1-3 (KJV)"]
      },
      {
        layer: "Layer 2",
        objection:
          "Revelation tribal language is symbolic and does not preserve Israel-specific expectation.",
        reply:
          "Apocalyptic numerology removes ethnic referent weight from those passages.",
        counterResponse:
          "Symbolic genre does not automatically erase explicit tribal naming and parallel apostolic naming in the same vision world.",
        references: ["Revelation 7:4 (KJV)", "Revelation 21:12 (KJV)"]
      }
    ]
  }
];

const chapterContextNotes = {
  "1 Kings 4": "1 Kings 4 summarizes Solomon's reign and kingdom extent language tied to earlier land-promise patterns.",
  "Acts 1": "Acts 1 records post-resurrection instruction, kingdom expectation, and the ascension commission context.",
  "Acts 10": "Acts 10 narrates Cornelius, Peter's preaching, and belief-remission language in a Jew-Gentile inclusion moment.",
  "Acts 2": "Acts 2 presents Pentecost proclamation, resurrection-exaltation argumentation, and Davidic citation usage.",
  "Acts 13": "Acts 13 narrates Jew-Gentile response contrast: some reject the word, Gentiles rejoice, and mission extends outward.",
  "Acts 16": "Acts 16 contains direct salvation proclamation language: Believe on the Lord Jesus Christ.",
  "Acts 17": "Acts 17 presents a public universal repentance command in the context of creation, judgment, and resurrection proclamation.",
  "Amos 9": "Amos 9 closes with restoration language about Israel's return, rebuilding, and secure planting in the land.",
  "Colossians 1": "Colossians 1 emphasizes Christ's supremacy and reconciliation with conditional continuation language in verse 23.",
  "Deuteronomy 28": "Deuteronomy 28 details covenant blessings and curses, including dispersion warnings for disobedience.",
  "Deuteronomy 30": "Deuteronomy 30 presents post-exile restoration language, including regathering and return to the fathers' land.",
  "Ephesians 1": "Ephesians 1 centers blessings in Christ and includes hearing and believing language as part of participation.",
  "Ephesians 2": "Ephesians 2 highlights salvation by grace through faith and transformation from prior spiritual death.",
  "Ezekiel 40": "Ezekiel 40 begins the temple-vision sequence in explicit land-of-Israel framing.",
  "Ezekiel 43": "Ezekiel 43 includes throne/dwelling language and temple-order instructions tied to Israel.",
  "Galatians 3": "Galatians 3 emphasizes justification by faith and unity in Christ while discussing Abrahamic promise themes.",
  "Galatians 6": "Galatians 6 closes with blessing language that includes the phrase Israel of God.",
  "Genesis 50": "Genesis 50 frames Joseph's suffering within creaturely evil intent and God's overriding good purpose.",
  "Habakkuk 1": "Habakkuk 1 includes holiness language and the prophet's complaint over judgment and violence.",
  "Genesis 17": "Genesis 17 presents covenant sign language and promises to Abraham and his seed, including the land promise.",
  "Genesis 25": "Genesis 25 includes the twins oracle about two nations and the elder-younger service statement later cited in Romans 9.",
  "Genesis 33": "Genesis 33 narrates Jacob-Esau reconciliation and unexpected mercy language in their meeting.",
  "Hebrews 10": "Hebrews 10 emphasizes Christ's once-for-all offering and its decisive sufficiency.",
  "Hebrews 11": "Hebrews 11 recounts faith-history themes, including patriarchal promise and homeland language.",
  "Hebrews 2": "Hebrews 2 stresses Christ's incarnational suffering and broad language around tasting death for every man.",
  "Hebrews 3": "Hebrews 3 combines exhortation with warning and continuation language aimed at covenant community perseverance.",
  "Hebrews 6": "Hebrews 6 contains one of the strongest warning passages concerning falling away after profound participation.",
  "Hebrews 8": "Hebrews 8 cites Jeremiah's New Covenant terms, including explicit mention of Israel and Judah.",
  "Isaiah 55": "Isaiah 55 is an invitation chapter calling hearers to seek the LORD, forsake wickedness, and come freely.",
  "James 1": "James 1 addresses testing, wisdom, and explicitly denies that God tempts anyone with evil.",
  "Isaiah 2": "Isaiah 2 presents mountain-of-the-LORD and nations-to-Zion imagery with peace-among-nations language.",
  "Jeremiah 31": "Jeremiah 31 includes New Covenant promise language and affirmations of Israel's national continuity.",
  "Jeremiah 33": "Jeremiah 33 grounds covenant confidence in God's fixed order of creation and mercy to Jacob's seed.",
  "Jeremiah 18": "Jeremiah 18 uses potter-clay imagery with explicit conditional nation language tied to repentance and judgment.",
  "Jeremiah 30": "Jeremiah 30 includes Jacob's trouble language and rescue promise framing for Israel.",
  "John 1": "John 1 presents Christ's coming, human response, and receiving-believing language tied to becoming children of God.",
  "John 3": "John 3 includes new birth discourse and broad gospel proclamation with whosoever-believeth language.",
  "John 5": "John 5 presents Jesus' authority claims and direct rebuke: people refuse to come for life.",
  "John 6": "John 6 features Bread of Life teaching, drawing language, and tensions around belief and unbelief.",
  "John 10": "John 10 uses shepherd imagery to distinguish followers and emphasizes hearing the Shepherd's voice.",
  "John 12": "John 12 ties Jesus' lifting up to drawing all men and transitions toward the passion narrative.",
  "John 15": "John 15 uses vine-branch imagery with abiding and non-abiding consequences.",
  "John 18": "John 18 includes Jesus' kingdom statement before Pilate in a trial context.",
  "Joshua 21": "Joshua 21 emphasizes covenant faithfulness language in Israel's initial land-settlement stage.",
  "Leviticus 18": "Leviticus 18 links moral defilement with land-expulsion warning language.",
  "Leviticus 26": "Leviticus 26 combines covenant sanctions with later remembrance and mercy themes.",
  "Luke 15": "Luke 15's parables of lostness and recovery frame dead/alive language in restoration context.",
  "Luke 21": "Luke 21 discusses Jerusalem's judgment and includes an until marker for Gentile times.",
  "Luke 22": "Luke 22 includes kingdom-throne language connected to judging the twelve tribes of Israel.",
  "Luke 1": "Luke 1 contains angelic throne and Jacob-house reign language concerning Messiah's kingdom.",
  "Matthew 19": "Matthew 19 includes Jesus' promise of future judging over the twelve tribes of Israel.",
  "Matthew 24": "Matthew 24 contains Jesus' Olivet discourse, including generation language and tribulation markers.",
  "Matthew 23": "Matthew 23 combines prophetic rebuke with Jesus' lament over Jerusalem's refusal.",
  "Micah 4": "Micah 4 parallels Zion-and-nations restoration language and future peace motifs.",
  "Malachi 1": "Malachi 1 contrasts Jacob and Esau/Edom in covenant-judgment language that Paul later cites in Romans 9.",
  "Proverbs 18": "Proverbs 18 highlights wisdom in hearing a matter fully before answering.",
  "Revelation 7": "Revelation 7 includes sealing language and explicit tribal naming for the children of Israel.",
  "Revelation 16": "Revelation 16 includes bowl judgments and the Armageddon gathering statement.",
  "Revelation 19": "Revelation 19 presents Christ's victory imagery over rebellious kings and armies.",
  "Revelation 21": "Revelation 21 describes New Jerusalem with both tribal gate names and apostolic foundation names.",
  "Revelation 22": "Revelation 22 closes with open invitation language: whosoever will may take the water of life freely.",
  "Romans 4": "Romans 4 discusses Abrahamic promise, faith, and heir-of-the-world language.",
  "Romans 2": "Romans 2 emphasizes impartial judgment principles and moral accountability before God.",
  "Romans 8": "Romans 8 provides assurance themes for believers and a theological sequence involving foreknowledge and predestination.",
  "Romans 9": "Romans 9 addresses divine mercy, Israel, and election themes that continue into Romans 10 and 11.",
  "Romans 10": "Romans 10 stresses faith, confession, proclamation, and whosoever salvation language.",
  "Romans 11": "Romans 11 includes warning language about continuing in God's goodness and not being cut off.",
  "1 Corinthians 10": "1 Corinthians 10 warns believers from Israel's examples and exhorts vigilance against falling.",
  "1 Peter 1": "1 Peter 1 links foreknowledge language with sanctification, obedience, and redemptive identity.",
  "1 John 2": "1 John 2 includes Christ as propitiation language and broad scope wording about the whole world.",
  "1 Peter 2": "1 Peter 2 applies covenant-people language to believers and emphasizes identity and witness themes.",
  "1 Thessalonians 5": "1 Thessalonians 5 calls believers to discernment: prove all things; hold fast what is good.",
  "1 Timothy 2": "1 Timothy 2 combines intercession for all kinds of people with God's saving desire statements.",
  "2 Timothy 2": "2 Timothy 2 includes vessel imagery with cleansing language and readiness for honorable use.",
  "2 Peter 2": "2 Peter 2 warns of apostasy and worsening condition after escaping prior corruption.",
  "2 Peter 3": "2 Peter 3 discusses patience, repentance, and the coming day of the Lord.",
  "Ezekiel 36": "Ezekiel 36 presents regathering and renewal language linked to Israel being brought into its own land.",
  "Zechariah 12": "Zechariah 12 includes Jerusalem-focused prophecy and national mourning around the pierced one.",
  "Zechariah 14": "Zechariah 14 presents Jerusalem-centered day-of-the-LORD language with nations and worship themes."
};

const lensVerses = [
  {
    category: "Invitation",
    reference: "Revelation 22:17 (KJV)",
    passage:
      "And the Spirit and the bride say, Come. And let him that heareth say, Come. And let him that is athirst come. And whosoever will, let him take the water of life freely."
  },
  {
    category: "Invitation",
    reference: "Isaiah 55:1 (KJV)",
    passage:
      "Ho, every one that thirsteth, come ye to the waters, and he that hath no money; come ye, buy, and eat; yea, come, buy wine and milk without money and without price."
  },
  {
    category: "Atonement",
    reference: "1 John 2:2 (KJV)",
    passage:
      "And he is the propitiation for our sins: and not for ours only, but also for the sins of the whole world."
  },
  {
    category: "Atonement",
    reference: "Hebrews 2:9 (KJV)",
    passage:
      "But we see Jesus, who was made a little lower than the angels for the suffering of death, crowned with glory and honour; that he by the grace of God should taste death for every man."
  },
  {
    category: "Responsibility",
    reference: "Acts 17:30 (KJV)",
    passage:
      "And the times of this ignorance God winked at; but now commandeth all men every where to repent:"
  },
  {
    category: "Responsibility",
    reference: "John 5:40 (KJV)",
    passage: "And ye will not come to me, that ye might have life."
  },
  {
    category: "Warning",
    reference: "Hebrews 6:4-6 (KJV)",
    passage:
      "For it is impossible for those who were once enlightened, and have tasted of the heavenly gift, and were made partakers of the Holy Ghost, And have tasted the good word of God, and the powers of the world to come, If they shall fall away, to renew them again unto repentance; seeing they crucify to themselves the Son of God afresh, and put him to an open shame."
  },
  {
    category: "Warning",
    reference: "2 Peter 2:20-21 (KJV)",
    passage:
      "For if after they have escaped the pollutions of the world through the knowledge of the Lord and Saviour Jesus Christ, they are again entangled therein, and overcome, the latter end is worse with them than the beginning. For it had been better for them not to have known the way of righteousness, than, after they have known it, to turn from the holy commandment delivered unto them."
  },
  {
    category: "Romans 9 Context",
    reference: "Romans 9:30-32 (KJV)",
    passage:
      "What shall we say then? That the Gentiles, which followed not after righteousness, have attained to righteousness, even the righteousness which is of faith. But Israel, which followed after the law of righteousness, hath not attained to the law of righteousness. Wherefore? Because they sought it not by faith, but as it were by the works of the law."
  },
  {
    category: "Romans 9 Context",
    reference: "Jeremiah 18:6-10 (KJV)",
    passage:
      "O house of Israel, cannot I do with you as this potter? saith the LORD. Behold, as the clay is in the potter's hand, so are ye in mine hand, O house of Israel. At what instant I shall speak concerning a nation, and concerning a kingdom, to pluck up, and to pull down, and to destroy it; If that nation, against whom I have pronounced, turn from their evil, I will repent of the evil that I thought to do unto them. And at what instant I shall speak concerning a nation, and concerning a kingdom, to build and to plant it; If it do evil in my sight, that it obey not my voice, then I will repent of the good, wherewith I said I would benefit them."
  },
  {
    category: "Conflation Check",
    reference: "Acts 10:34-35 (KJV)",
    passage:
      "Then Peter opened his mouth, and said, Of a truth I perceive that God is no respecter of persons: But in every nation he that feareth him, and worketh righteousness, is accepted with him."
  },
  {
    category: "Conflation Check",
    reference: "Acts 16:31 (KJV)",
    passage:
      "And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house."
  },
  {
    category: "Election Context",
    reference: "Romans 9:10-13 (KJV)",
    passage:
      "And not only this; but when Rebecca also had conceived by one, even by our father Isaac; (For the children being not yet born, neither having done any good or evil, that the purpose of God according to election might stand, not of works, but of him that calleth;) It was said unto her, The elder shall serve the younger. As it is written, Jacob have I loved, but Esau have I hated."
  },
  {
    category: "Election Context",
    reference: "Genesis 25:23 (KJV)",
    passage:
      "And the LORD said unto her, Two nations are in thy womb, and two manner of people shall be separated from thy bowels; and the one people shall be stronger than the other people; and the elder shall serve the younger."
  },
  {
    category: "Election Context",
    reference: "Malachi 1:2-4 (KJV)",
    passage:
      "I have loved you, saith the LORD. Yet ye say, Wherein hast thou loved us? Was not Esau Jacob's brother? saith the LORD: yet I loved Jacob, And I hated Esau, and laid his mountains and his heritage waste for the dragons of the wilderness. Whereas Edom saith, We are impoverished, but we will return and build the desolate places; thus saith the LORD of hosts, They shall build, but I will throw down."
  },
  {
    category: "RT Covenant Continuity",
    reference: "Romans 11:29 (KJV)",
    passage:
      "For the gifts and calling of God are without repentance."
  },
  {
    category: "RT Covenant Continuity",
    reference: "Jeremiah 31:31 (KJV)",
    passage:
      "Behold, the days come, saith the LORD, that I will make a new covenant with the house of Israel, and with the house of Judah."
  },
  {
    category: "RT Identity",
    reference: "Romans 9:6-7 (KJV)",
    passage:
      "For they are not all Israel, which are of Israel: Neither, because they are the seed of Abraham, are they all children."
  },
  {
    category: "RT Identity",
    reference: "1 Corinthians 10:32 (KJV)",
    passage:
      "Give none offence, neither to the Jews, nor to the Gentiles, nor to the church of God."
  },
  {
    category: "RT Kingdom",
    reference: "Acts 1:6-7 (KJV)",
    passage:
      "When they therefore were come together, they asked of him, saying, Lord, wilt thou at this time restore again the kingdom to Israel? And he said unto them, It is not for you to know the times or the seasons, which the Father hath put in his own power."
  },
  {
    category: "RT Kingdom",
    reference: "Luke 1:32-33 (KJV)",
    passage:
      "The Lord God shall give unto him the throne of his father David: And he shall reign over the house of Jacob for ever."
  },
  {
    category: "RT Prophecy",
    reference: "Revelation 7:4 (KJV)",
    passage:
      "And I heard the number of them which were sealed: and there were sealed an hundred and forty and four thousand of all the tribes of the children of Israel."
  },
  {
    category: "RT Prophecy",
    reference: "Zechariah 14:16 (KJV)",
    passage:
      "And it shall come to pass, that every one that is left of all the nations which came against Jerusalem shall even go up from year to year to worship the King, the LORD of hosts."
  }
];

const toneSelect = document.querySelector("#tone-select");
const pageBg = document.querySelector(".page-bg");
const scrollProgressBar = document.querySelector("#scroll-progress-bar");
const subtitle = document.querySelector("#subtitle");
const toneDescription = document.querySelector("#tone-description");
const introCopy = document.querySelector("#intro-copy");
const searchInput = document.querySelector("#search-input");
const searchClear = document.querySelector("#search-clear");
const glossaryInput = document.querySelector("#glossary-input");
const glossaryClear = document.querySelector("#glossary-clear");

const tabStudy = document.querySelector("#tab-study");
const tabCompare = document.querySelector("#tab-compare");
const studyView = document.querySelector("#study-view");
const compareView = document.querySelector("#compare-view");
const contextViewerSection = document.querySelector("#context-viewer");

const argumentList = document.querySelector("#argument-list");
const proofList = document.querySelector("#proof-list");
const replyList = document.querySelector("#reply-list");
const replacementList = document.querySelector("#replacement-list");
const glossaryList = document.querySelector("#glossary-list");
const drilldownList = document.querySelector("#drilldown-list");
const tulipSlopeList = document.querySelector("#tulip-slope-list");
const replacementDrilldownList = document.querySelector("#replacement-drilldown-list");
const contextSelect = document.querySelector("#context-select");
const contextOutput = document.querySelector("#context-output");
const comparisonGrid = document.querySelector("#comparison-grid");
const comparisonFilters = document.querySelector("#comparison-filters");

const argumentTemplate = document.querySelector("#argument-template");
const proofTemplate = document.querySelector("#proof-template");
const verseTemplate = document.querySelector("#verse-template");
const glossaryTemplate = document.querySelector("#glossary-template");
const drilldownTemplate = document.querySelector("#drilldown-template");
const comparisonTemplate = document.querySelector("#comparison-template");

const filtersContainer = document.querySelector("#filters");
const verseCards = document.querySelector("#verse-cards");
const logicList = document.querySelector("#logic-list");

let currentTone = "pastoral";
let currentCategory = "All";
let currentComparisonType = "All";
let currentSearchQuery = "";
let currentGlossaryQuery = "";
let currentContextReference = "";
let currentView = "study";
const chapterCache = new Map();
let contextRenderToken = 0;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (isReplacementPage) {
  currentCategory = "RT Covenant Continuity";
  currentComparisonType = "Replacement Theology";
}

if (toneSelect) {
  toneSelect.value = currentTone;
}

function setupRevealStagger() {
  const revealNodes = [...document.querySelectorAll(".reveal")];
  revealNodes.forEach((node, index) => {
    node.style.setProperty("--reveal-delay", `${90 + index * 65}ms`);
  });
}

function applyStaggerClass(node, index) {
  node.classList.add("list-enter");
  node.style.setProperty("--stagger", `${Math.min(index * 55, 500)}ms`);
}

function animateViewIn(panel) {
  if (panel._hideHandler) {
    panel.removeEventListener("transitionend", panel._hideHandler);
    panel._hideHandler = null;
  }
  panel.hidden = false;
  requestAnimationFrame(() => {
    panel.classList.add("is-visible");
  });
}

function animateViewOut(panel) {
  if (panel.hidden) {
    return;
  }

  panel.classList.remove("is-visible");
  if (prefersReducedMotion.matches) {
    panel.hidden = true;
    return;
  }

  const hideOnEnd = () => {
    panel.hidden = true;
    panel._hideHandler = null;
    panel.removeEventListener("transitionend", hideOnEnd);
  };
  panel._hideHandler = hideOnEnd;
  panel.addEventListener("transitionend", hideOnEnd);
}

function updateScrollProgress() {
  if (!scrollProgressBar) {
    return;
  }

  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = maxScroll <= 0 ? 0 : Math.min(window.scrollY / maxScroll, 1);
  scrollProgressBar.style.transform = `scaleX(${ratio})`;
}

function updateBackgroundParallax() {
  if (!pageBg || prefersReducedMotion.matches) {
    return;
  }
  const yOffset = Math.min(window.scrollY * 0.05, 26);
  pageBg.style.transform = `translate3d(0, ${-yOffset}px, 0)`;
}

function applyTiltEffects(scope = document) {
  if (prefersReducedMotion.matches) {
    return;
  }

  const cards = scope.querySelectorAll(".tilt-surface");
  cards.forEach((card) => {
    if (card.dataset.tiltWired === "1") {
      return;
    }
    card.dataset.tiltWired = "1";

    const limit = 5;
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * limit * 2;
      const rotateX = (0.5 - y) * limit * 2;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

const extraPassageByReference = {
  "1 Peter 1:2 (KJV)":
    "Elect according to the foreknowledge of God the Father, through sanctification of the Spirit, unto obedience and sprinkling of the blood of Jesus Christ: Grace unto you, and peace, be multiplied."
};

function extractReferenceObjects(collection) {
  return collection.flatMap((entry) => entry.references);
}

function getReferencePool() {
  const withPassages = [
    ...extractReferenceObjects(argumentsData),
    ...extractReferenceObjects(proofTextsData),
    ...extractReferenceObjects(commonRepliesData),
    ...extractReferenceObjects(replacementTheologyData),
    ...lensVerses
  ];

  const fromGlossary = glossaryData.map((entry) => entry.references).flat();
  const fromDrilldown = objectionDrilldownData
    .flatMap((entry) => entry.steps)
    .flatMap((step) => step.references);
  const fromTulipSlope = tulipDeterminismSlopeData
    .flatMap((entry) => entry.steps)
    .flatMap((step) => step.references);
  const fromReplacementDrilldown = replacementDrilldownData
    .flatMap((entry) => entry.steps)
    .flatMap((step) => step.references);

  const allReferenceStrings = [
    ...withPassages.map((entry) => entry.reference),
    ...fromGlossary,
    ...fromDrilldown,
    ...fromTulipSlope,
    ...fromReplacementDrilldown
  ];

  const passageMap = new Map();
  withPassages.forEach((entry) => {
    if (!passageMap.has(entry.reference)) {
      passageMap.set(entry.reference, entry.passage);
    }
  });

  Object.entries(extraPassageByReference).forEach(([reference, passage]) => {
    if (!passageMap.has(reference)) {
      passageMap.set(reference, passage);
    }
  });

  const uniqueReferences = [...new Set(allReferenceStrings)].sort((a, b) =>
    a.localeCompare(b)
  );

  return uniqueReferences.map((reference) => ({
    reference,
    passage:
      passageMap.get(reference) ||
      "Passage text is not yet loaded for this reference in the app data."
  }));
}

const contextReferencePool = getReferencePool();
const referencePassageLookup = new Map(
  contextReferencePool.map((entry) => [entry.reference, entry.passage])
);
currentContextReference = contextReferencePool[0]?.reference || "";

function getChapterKey(reference) {
  const stripped = reference.replace(" (KJV)", "");
  const match = stripped.match(/^(.+?)\s(\d+):/);
  if (!match) {
    return stripped;
  }
  return `${match[1]} ${match[2]}`;
}

function parseReference(reference) {
  const stripped = reference.replace(" (KJV)", "").trim();
  const match = stripped.match(/^(.+?)\s+(\d+):(\d+)(?:-(\d+))?$/);
  if (!match) {
    return null;
  }

  const book = match[1];
  const chapter = Number(match[2]);
  const verseStart = Number(match[3]);
  const verseEnd = match[4] ? Number(match[4]) : verseStart;

  return {
    book,
    chapter,
    verseStart,
    verseEnd,
    chapterKey: `${book} ${chapter}`
  };
}

function getSelectedVerseNumbers(reference) {
  const parsed = parseReference(reference);
  if (!parsed) {
    return new Set();
  }

  const verses = new Set();
  for (let verse = parsed.verseStart; verse <= parsed.verseEnd; verse += 1) {
    verses.add(verse);
  }
  return verses;
}

async function fetchKjvChapter(chapterKey) {
  if (chapterCache.has(chapterKey)) {
    return chapterCache.get(chapterKey);
  }

  const query = encodeURIComponent(chapterKey);
  const response = await fetch(`https://bible-api.com/${query}?translation=kjv`);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const data = await response.json();
  if (!Array.isArray(data.verses) || !data.verses.length) {
    throw new Error("No verses returned");
  }

  const chapterData = {
    reference: data.reference || `${chapterKey} (KJV)`,
    verses: data.verses.map((verse) => ({
      verse: Number(verse.verse),
      text: String(verse.text || "").trim()
    }))
  };

  chapterCache.set(chapterKey, chapterData);
  return chapterData;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getHighlightedHtml(text) {
  const rawText = String(text);
  if (!currentSearchQuery) {
    return escapeHtml(rawText);
  }

  const regex = new RegExp(escapeRegExp(currentSearchQuery), "ig");
  let cursor = 0;
  let result = "";
  let match = regex.exec(rawText);

  while (match) {
    const start = match.index;
    const end = start + match[0].length;
    result += escapeHtml(rawText.slice(cursor, start));
    result += `<mark class="search-hit">${escapeHtml(match[0])}</mark>`;
    cursor = end;
    match = regex.exec(rawText);
  }

  result += escapeHtml(rawText.slice(cursor));
  return result;
}

function setHighlightedText(element, text) {
  element.innerHTML = getHighlightedHtml(text);
}

function lookupPassage(reference) {
  return (
    referencePassageLookup.get(reference) ||
    "Passage text is not yet loaded for this reference in the app data."
  );
}

function openContextViewer(reference) {
  currentContextReference = reference;
  renderContextViewer();
  setView("study");
  if (contextViewerSection) {
    contextViewerSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function createPassageDetail(reference, passage, showContextButton = true) {
  const detail = document.createElement("details");
  detail.className = "passage-detail";

  const summary = document.createElement("summary");
  setHighlightedText(summary, reference);

  const linkButton = document.createElement("button");
  linkButton.type = "button";
  linkButton.className = "context-link";
  linkButton.textContent = "Open Context Viewer";
  linkButton.addEventListener("click", () => {
    openContextViewer(reference);
  });

  const text = document.createElement("p");
  text.className = "passage-text";
  setHighlightedText(text, passage);

  detail.append(summary);
  if (showContextButton) {
    detail.append(linkButton);
  }
  detail.append(text);
  return detail;
}

function attachAccordionBehavior(root) {
  const toggle = root.querySelector(".argument-toggle");
  const body = root.querySelector(".argument-body");
  const symbol = root.querySelector(".symbol");
  body.style.maxHeight = "0px";
  body.style.opacity = "0";

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";

    if (prefersReducedMotion.matches) {
      toggle.setAttribute("aria-expanded", String(!expanded));
      body.hidden = expanded;
      root.classList.toggle("is-open", !expanded);
      body.style.maxHeight = !expanded ? "" : "0px";
      body.style.opacity = !expanded ? "1" : "0";
      symbol.textContent = expanded ? "+" : "-";
      return;
    }

    if (expanded) {
      const currentHeight = body.scrollHeight;
      body.style.maxHeight = `${currentHeight}px`;
      requestAnimationFrame(() => {
        body.style.maxHeight = "0px";
        body.style.opacity = "0";
      });

      const collapseDone = (event) => {
        if (event.propertyName !== "max-height") {
          return;
        }
        body.hidden = true;
        body.removeEventListener("transitionend", collapseDone);
      };
      body.addEventListener("transitionend", collapseDone);
    } else {
      body.hidden = false;
      body.style.maxHeight = "0px";
      body.style.opacity = "0";
      requestAnimationFrame(() => {
        body.style.maxHeight = `${body.scrollHeight}px`;
        body.style.opacity = "1";
      });

      const expandDone = (event) => {
        if (event.propertyName !== "max-height") {
          return;
        }
        if (toggle.getAttribute("aria-expanded") === "true") {
          body.style.maxHeight = "none";
        }
        body.removeEventListener("transitionend", expandDone);
      };
      body.addEventListener("transitionend", expandDone);
    }

    toggle.setAttribute("aria-expanded", String(!expanded));
    root.classList.toggle("is-open", !expanded);
    symbol.textContent = expanded ? "+" : "-";
    window.setTimeout(updateScrollProgress, 60);
  });
}

function setView(viewName) {
  if (!studyView || !compareView || !tabStudy || !tabCompare) {
    return;
  }
  currentView = viewName;
  const showStudy = viewName === "study";
  const incoming = showStudy ? studyView : compareView;
  const outgoing = showStudy ? compareView : studyView;

  animateViewOut(outgoing);
  animateViewIn(incoming);

  tabStudy.classList.toggle("active", showStudy);
  tabCompare.classList.toggle("active", !showStudy);

  tabStudy.setAttribute("aria-selected", String(showStudy));
  tabCompare.setAttribute("aria-selected", String(!showStudy));
}

function renderEmptyState(container, message) {
  const item = document.createElement("p");
  item.className = "empty-state";
  item.textContent = message;
  container.appendChild(item);
}

function hasSearchMatch(fields) {
  if (!currentSearchQuery) {
    return true;
  }

  const haystack = fields
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return haystack.includes(currentSearchQuery);
}

function matchesArgument(entry, toneKey) {
  return hasSearchMatch([
    entry.title,
    entry.tones[toneKey].claim,
    entry.tones[toneKey].logic,
    ...entry.references.flatMap((verse) => [verse.reference, verse.passage])
  ]);
}

function matchesClaimResponseEntry(entry, toneKey) {
  return hasSearchMatch([
    entry.title,
    entry.claimLabel,
    entry.responseLabel,
    entry.claim,
    entry.tones[toneKey],
    ...entry.references.flatMap((verse) => [verse.reference, verse.passage])
  ]);
}

function matchesLensVerse(entry) {
  return hasSearchMatch([entry.category, entry.reference, entry.passage]);
}

function matchesGlossaryEntry(entry) {
  const glossaryMatch = !currentGlossaryQuery || hasSearchMatchLocal(
    [entry.term, entry.definition, ...entry.references],
    currentGlossaryQuery
  );

  return glossaryMatch && hasSearchMatch([entry.term, entry.definition, ...entry.references]);
}

function matchesDrilldownEntry(entry) {
  return hasSearchMatch([
    entry.title,
    ...entry.steps.flatMap((step) => [
      step.layer,
      step.objection,
      step.reply,
      step.calvinistReply,
      step.replacementReply,
      step.counterResponse,
      ...step.references.map((reference) => lookupPassage(reference)),
      ...step.references
    ])
  ]);
}

function hasSearchMatchLocal(fields, query) {
  const haystack = fields
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

function renderToneHeader(toneKey) {
  const profile = toneProfiles[toneKey];
  if (subtitle) {
    setHighlightedText(subtitle, profile.subtitle);
  }
  if (toneDescription) {
    setHighlightedText(toneDescription, profile.description);
  }
  if (introCopy) {
    setHighlightedText(introCopy, profile.intro);
  }
}

function renderArguments(toneKey) {
  if (!argumentList || !argumentTemplate) {
    return;
  }
  argumentList.innerHTML = "";

  const entries = argumentsData.filter((entry) => matchesArgument(entry, toneKey));

  if (!entries.length) {
    renderEmptyState(argumentList, "No core challenges matched your search.");
    return;
  }

  entries.forEach((entry, index) => {
    const node = argumentTemplate.content.cloneNode(true);
    const article = node.querySelector(".argument-item");
    article.classList.add("tilt-surface");
    applyStaggerClass(article, index);

    setHighlightedText(article.querySelector(".argument-title"), entry.title);
    setHighlightedText(article.querySelector(".argument-claim"), entry.tones[toneKey].claim);
    setHighlightedText(article.querySelector(".argument-logic"), entry.tones[toneKey].logic);

    const referenceList = article.querySelector(".reference-list");
    entry.references.forEach((verse) => {
      referenceList.appendChild(createPassageDetail(verse.reference, verse.passage));
    });

    attachAccordionBehavior(article);
    argumentList.appendChild(node);
  });

  applyTiltEffects(argumentList);
}

function renderClaimResponseList(container, entries, toneKey, emptyMessage) {
  if (!container || !proofTemplate) {
    return;
  }
  container.innerHTML = "";

  const filteredEntries = entries.filter((entry) => matchesClaimResponseEntry(entry, toneKey));

  if (!filteredEntries.length) {
    renderEmptyState(container, emptyMessage);
    return;
  }

  filteredEntries.forEach((entry, index) => {
    const node = proofTemplate.content.cloneNode(true);
    const article = node.querySelector(".argument-item");
    article.classList.add("tilt-surface");
    applyStaggerClass(article, index);

    setHighlightedText(article.querySelector(".argument-title"), entry.title);
    setHighlightedText(article.querySelector(".proof-claim-label"), entry.claimLabel);
    setHighlightedText(article.querySelector(".proof-response-label"), entry.responseLabel);
    setHighlightedText(article.querySelector(".proof-claim"), entry.claim);
    setHighlightedText(article.querySelector(".proof-response"), entry.tones[toneKey]);

    const referenceList = article.querySelector(".reference-list");
    entry.references.forEach((verse) => {
      referenceList.appendChild(createPassageDetail(verse.reference, verse.passage));
    });

    attachAccordionBehavior(article);
    container.appendChild(node);
  });

  applyTiltEffects(container);
}

function renderGlossary() {
  if (!glossaryList || !glossaryTemplate) {
    return;
  }
  glossaryList.innerHTML = "";
  const entries = glossaryData.filter((entry) => matchesGlossaryEntry(entry));

  if (!entries.length) {
    renderEmptyState(glossaryList, "No glossary terms matched your search.");
    return;
  }

  entries.forEach((entry, index) => {
    const node = glossaryTemplate.content.cloneNode(true);
    const article = node.querySelector(".argument-item");
    article.classList.add("tilt-surface");
    applyStaggerClass(article, index);

    setHighlightedText(article.querySelector(".argument-title"), entry.term);
    setHighlightedText(article.querySelector(".glossary-definition"), entry.definition);

    const referenceList = article.querySelector(".reference-list");
    entry.references.forEach((reference) => {
      referenceList.appendChild(createPassageDetail(reference, lookupPassage(reference)));
    });

    attachAccordionBehavior(article);
    glossaryList.appendChild(node);
  });

  applyTiltEffects(glossaryList);
}

function renderDrilldownList(container, entries, emptyMessage, replyLabelText) {
  if (!container || !drilldownTemplate) {
    return;
  }
  container.innerHTML = "";
  const filteredEntries = entries.filter((entry) => matchesDrilldownEntry(entry));

  if (!filteredEntries.length) {
    renderEmptyState(container, emptyMessage);
    return;
  }

  filteredEntries.forEach((entry, index) => {
    const node = drilldownTemplate.content.cloneNode(true);
    const article = node.querySelector(".argument-item");
    article.classList.add("tilt-surface");
    applyStaggerClass(article, index);
    setHighlightedText(article.querySelector(".argument-title"), entry.title);

    const stepsContainer = article.querySelector(".drilldown-steps");
    entry.steps.forEach((step) => {
      const stepNode = document.createElement("div");
      stepNode.className = "drill-step";

      const layer = document.createElement("h3");
      setHighlightedText(layer, step.layer);

      const objectionLabel = document.createElement("h4");
      objectionLabel.textContent = "Objection";
      const objectionText = document.createElement("p");
      setHighlightedText(objectionText, step.objection);

      const replyLabel = document.createElement("h4");
      replyLabel.textContent = replyLabelText;
      const replyText = document.createElement("p");
      setHighlightedText(replyText, step.reply || step.calvinistReply || step.replacementReply || "");

      const counterLabel = document.createElement("h4");
      counterLabel.textContent = "Counter-Response";
      const counterText = document.createElement("p");
      setHighlightedText(counterText, step.counterResponse);

      const refsLabel = document.createElement("h4");
      refsLabel.textContent = "KJV References";
      const refs = document.createElement("div");
      refs.className = "reference-list";

      step.references.forEach((reference) => {
        refs.appendChild(createPassageDetail(reference, lookupPassage(reference)));
      });

      stepNode.append(
        layer,
        objectionLabel,
        objectionText,
        replyLabel,
        replyText,
        counterLabel,
        counterText,
        refsLabel,
        refs
      );
      stepsContainer.appendChild(stepNode);
    });

    attachAccordionBehavior(article);
    container.appendChild(node);
  });

  applyTiltEffects(container);
}

function renderDrilldown() {
  renderDrilldownList(
    drilldownList,
    objectionDrilldownData,
    "No Calvinism objection drilldown entries matched your search.",
    "Calvinist Reply"
  );
}

function renderTulipSlope() {
  renderDrilldownList(
    tulipSlopeList,
    tulipDeterminismSlopeData,
    "No TULIP determinism slope entries matched your search.",
    "Determinist Inference"
  );
}

function renderReplacementDrilldown() {
  renderDrilldownList(
    replacementDrilldownList,
    replacementDrilldownData,
    "No replacement theology drilldown entries matched your search.",
    "Replacement Reply"
  );
}

function createChapterSkeleton(lineCount = 10) {
  const skeleton = document.createElement("div");
  skeleton.className = "chapter-skeleton";
  for (let i = 0; i < lineCount; i += 1) {
    const line = document.createElement("div");
    line.className = "skeleton-line";
    skeleton.appendChild(line);
  }
  return skeleton;
}

async function renderContextViewer() {
  if (!contextOutput || !contextSelect) {
    return;
  }
  const renderToken = ++contextRenderToken;
  contextOutput.innerHTML = "";

  const candidates = contextReferencePool.filter((entry) =>
    hasSearchMatch([
      entry.reference,
      entry.passage,
      getChapterKey(entry.reference),
      chapterContextNotes[getChapterKey(entry.reference)] || ""
    ])
  );

  contextSelect.innerHTML = "";
  if (!candidates.length) {
    contextSelect.disabled = true;
    renderEmptyState(contextOutput, "No context references matched your search.");
    return;
  }

  contextSelect.disabled = false;
  candidates.forEach((entry) => {
    const option = document.createElement("option");
    option.value = entry.reference;
    option.textContent = entry.reference;
    contextSelect.appendChild(option);
  });

  if (!candidates.some((entry) => entry.reference === currentContextReference)) {
    currentContextReference = candidates[0].reference;
  }

  contextSelect.value = currentContextReference;

  const selected = candidates.find((entry) => entry.reference === currentContextReference);
  if (!selected) {
    renderEmptyState(contextOutput, "Select a reference to view context.");
    return;
  }

  const chapterKey = getChapterKey(selected.reference);
  const contextNote = chapterContextNotes[chapterKey] || "No chapter context note is available yet for this reference.";
  const selectedVerses = getSelectedVerseNumbers(selected.reference);
  const relatedRefs = contextReferencePool.filter(
    (entry) => getChapterKey(entry.reference) === chapterKey && entry.reference !== selected.reference
  );

  const selectedWrap = document.createElement("div");
  selectedWrap.className = "context-note tilt-surface";
  const selectedTitle = document.createElement("h3");
  setHighlightedText(selectedTitle, `Selected Reference: ${selected.reference}`);
  selectedWrap.append(selectedTitle, createPassageDetail(selected.reference, selected.passage, false));

  const noteWrap = document.createElement("div");
  noteWrap.className = "context-note tilt-surface";
  const noteTitle = document.createElement("h3");
  setHighlightedText(noteTitle, `Chapter Context: ${chapterKey}`);
  const noteText = document.createElement("p");
  setHighlightedText(noteText, contextNote);
  noteWrap.append(noteTitle, noteText);

  const relatedWrap = document.createElement("div");
  relatedWrap.className = "related-refs tilt-surface";
  const relatedTitle = document.createElement("h3");
  setHighlightedText(relatedTitle, "Related References In This Chapter");
  relatedWrap.appendChild(relatedTitle);

  if (!relatedRefs.length) {
    const empty = document.createElement("p");
    empty.textContent = "No additional references from this chapter are currently loaded.";
    relatedWrap.appendChild(empty);
  } else {
    const relatedList = document.createElement("ul");
    relatedList.className = "related-list";
    relatedRefs.forEach((entry) => {
      const li = document.createElement("li");
      setHighlightedText(li, entry.reference);
      relatedList.appendChild(li);
    });
    relatedWrap.appendChild(relatedList);
  }

  const chapterWrap = document.createElement("div");
  chapterWrap.className = "chapter-view tilt-surface";
  const chapterTitle = document.createElement("h3");
  setHighlightedText(chapterTitle, `Full KJV Chapter Text: ${chapterKey}`);
  const chapterContent = document.createElement("div");
  chapterContent.className = "chapter-content";
  chapterContent.appendChild(createChapterSkeleton());
  chapterWrap.append(chapterTitle, chapterContent);

  contextOutput.append(selectedWrap, noteWrap, relatedWrap, chapterWrap);
  applyStaggerClass(selectedWrap, 0);
  applyStaggerClass(noteWrap, 1);
  applyStaggerClass(relatedWrap, 2);
  applyStaggerClass(chapterWrap, 3);
  applyTiltEffects(contextOutput);

  try {
    const chapterData = await fetchKjvChapter(chapterKey);
    if (renderToken !== contextRenderToken) {
      return;
    }

    chapterContent.innerHTML = "";
    const versesContainer = document.createElement("div");
    versesContainer.className = "chapter-verses";

    chapterData.verses.forEach((verse) => {
      const verseLine = document.createElement("p");
      verseLine.className = "chapter-verse";
      if (selectedVerses.has(verse.verse)) {
        verseLine.classList.add("selected-verse");
      }

      const verseNum = document.createElement("span");
      verseNum.className = "chapter-verse-num";
      verseNum.textContent = String(verse.verse);

      const verseText = document.createElement("span");
      verseText.className = "chapter-verse-text";
      setHighlightedText(verseText, verse.text);

      verseLine.append(verseNum, verseText);
      versesContainer.appendChild(verseLine);
    });

    chapterContent.appendChild(versesContainer);
    updateScrollProgress();
  } catch (error) {
    if (renderToken !== contextRenderToken) {
      return;
    }

    chapterContent.innerHTML = "";
    const errorText = document.createElement("p");
    errorText.className = "empty-state";
    errorText.textContent =
      "Could not load full chapter text from the KJV API. You can still use the selected passage above.";
    chapterContent.appendChild(errorText);
    updateScrollProgress();
  }
}

function renderLogicSummary(toneKey) {
  if (!logicList) {
    return;
  }
  logicList.innerHTML = "";
  toneProfiles[toneKey].logicSummary.forEach((line) => {
    const item = document.createElement("li");
    setHighlightedText(item, line);
    logicList.appendChild(item);
  });
}

function renderFilters() {
  if (!filtersContainer) {
    return;
  }
  filtersContainer.innerHTML = "";

  const lensSource = isReplacementPage
    ? lensVerses.filter((item) => item.category.startsWith("RT "))
    : lensVerses.filter((item) => !item.category.startsWith("RT "));
  const categories = ["All", ...new Set(lensSource.map((item) => item.category))];

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "filter-btn";
    button.type = "button";
    button.textContent = category;
    button.classList.toggle("active", category === currentCategory);

    button.addEventListener("click", () => {
      currentCategory = category;
      filtersContainer
        .querySelectorAll(".filter-btn")
        .forEach((btn) => btn.classList.toggle("active", btn.textContent === category));
      renderVerseCards(category);
    });

    filtersContainer.appendChild(button);
  });
}

function renderComparisonFilters() {
  if (!comparisonFilters) {
    return;
  }
  comparisonFilters.innerHTML = "";
  const categories = isReplacementPage
    ? ["All", "Replacement Theology", "Objection Drilldown"]
    : ["All", "Core Challenge", "Proof-Text", "Common Reply", "Determinism Slope", "Objection Drilldown"];

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "filter-btn";
    button.type = "button";
    button.textContent = category;
    button.classList.toggle("active", category === currentComparisonType);

    button.addEventListener("click", () => {
      currentComparisonType = category;
      comparisonFilters
        .querySelectorAll(".filter-btn")
        .forEach((btn) => btn.classList.toggle("active", btn.textContent === category));
      renderComparison(currentTone);
    });

    comparisonFilters.appendChild(button);
  });
}

function renderVerseCards(category = "All") {
  if (!verseCards || !verseTemplate) {
    return;
  }
  verseCards.innerHTML = "";

  const lensSource = isReplacementPage
    ? lensVerses.filter((item) => item.category.startsWith("RT "))
    : lensVerses.filter((item) => !item.category.startsWith("RT "));

  const subset = (category === "All"
    ? lensSource
    : lensSource.filter((verse) => verse.category === category))
    .filter((verse) => matchesLensVerse(verse));

  if (!subset.length) {
    renderEmptyState(verseCards, "No verse references matched your search and filter.");
    return;
  }

  subset.forEach((verse, index) => {
    const node = verseTemplate.content.cloneNode(true);
    const card = node.querySelector(".verse-card");
    card.classList.add("tilt-surface");
    applyStaggerClass(card, index);

    setHighlightedText(card.querySelector(".verse-tag"), verse.category);
    card
      .querySelector(".reference-list")
      .appendChild(createPassageDetail(verse.reference, verse.passage));

    verseCards.appendChild(node);
  });

  applyTiltEffects(verseCards);
}

function buildComparisonItems(toneKey) {
  const coreItems = argumentsData.map((entry) => ({
    type: "Core Challenge",
    title: entry.title,
    claimLabel: "Challenge Claim",
    claim: entry.tones[toneKey].claim,
    response: entry.tones[toneKey].logic,
    references: entry.references
  }));

  const proofItems = proofTextsData.map((entry) => ({
    type: "Proof-Text",
    title: entry.title,
    claimLabel: entry.claimLabel,
    claim: entry.claim,
    response: entry.tones[toneKey],
    references: entry.references
  }));

  const replyItems = commonRepliesData.map((entry) => ({
    type: "Common Reply",
    title: entry.title,
    claimLabel: entry.claimLabel,
    claim: entry.claim,
    response: entry.tones[toneKey],
    references: entry.references
  }));

  const replacementItems = replacementTheologyData.map((entry) => ({
    type: "Replacement Theology",
    title: entry.title,
    claimLabel: entry.claimLabel,
    claim: entry.claim,
    response: entry.tones[toneKey],
    references: entry.references
  }));

  const drilldownItems = objectionDrilldownData.flatMap((entry) =>
    entry.steps.map((step) => ({
      type: "Objection Drilldown",
      title: `${entry.title} - ${step.layer}`,
      claimLabel: "Calvinist Reply",
      claim: step.reply || step.calvinistReply || step.replacementReply || "",
      response: step.counterResponse,
      references: step.references.map((reference) => ({
        reference,
        passage: lookupPassage(reference)
      }))
      }))
  );

  const tulipSlopeItems = tulipDeterminismSlopeData.flatMap((entry) =>
    entry.steps.map((step) => ({
      type: "Determinism Slope",
      title: `${entry.title} - ${step.layer}`,
      claimLabel: "Determinist Inference",
      claim: step.reply || "",
      response: step.counterResponse,
      references: step.references.map((reference) => ({
        reference,
        passage: lookupPassage(reference)
      }))
      }))
  );

  const replacementDrilldownItems = replacementDrilldownData.flatMap((entry) =>
    entry.steps.map((step) => ({
      type: "Objection Drilldown",
      title: `${entry.title} - ${step.layer}`,
      claimLabel: "Replacement Reply",
      claim: step.reply || step.calvinistReply || step.replacementReply || "",
      response: step.counterResponse,
      references: step.references.map((reference) => ({
        reference,
        passage: lookupPassage(reference)
      }))
      }))
  );

  if (isReplacementPage) {
    return [...replacementItems, ...replacementDrilldownItems];
  }

  return [...coreItems, ...proofItems, ...replyItems, ...tulipSlopeItems, ...drilldownItems];
}

function renderComparison(toneKey) {
  if (!comparisonGrid || !comparisonTemplate) {
    return;
  }
  comparisonGrid.innerHTML = "";

  const items = buildComparisonItems(toneKey)
    .filter((entry) => (currentComparisonType === "All" ? true : entry.type === currentComparisonType))
    .filter((entry) =>
      hasSearchMatch([
        entry.type,
        entry.title,
        entry.claim,
        entry.response,
        ...entry.references.flatMap((verse) => [verse.reference, verse.passage])
      ])
    );

  if (!items.length) {
    renderEmptyState(comparisonGrid, "No side-by-side entries matched your search and filter.");
    return;
  }

  items.forEach((entry, index) => {
    const node = comparisonTemplate.content.cloneNode(true);
    const card = node.querySelector(".compare-card");
    card.classList.add("tilt-surface");
    applyStaggerClass(card, index);

    setHighlightedText(card.querySelector(".compare-type"), entry.type);
    setHighlightedText(card.querySelector(".compare-title"), entry.title);
    setHighlightedText(card.querySelector(".compare-claim-heading"), entry.claimLabel || "Claim");
    setHighlightedText(card.querySelector(".compare-claim"), entry.claim);
    setHighlightedText(card.querySelector(".compare-response"), entry.response);

    const referenceList = card.querySelector(".reference-list");
    entry.references.forEach((verse) => {
      referenceList.appendChild(createPassageDetail(verse.reference, verse.passage));
    });

    comparisonGrid.appendChild(node);
  });

  applyTiltEffects(comparisonGrid);
}

function renderAllForTone(toneKey) {
  renderToneHeader(toneKey);
  if (isReplacementPage) {
    renderClaimResponseList(
      replacementList,
      replacementTheologyData,
      toneKey,
      "No replacement theology entries matched your search."
    );
    renderReplacementDrilldown();
  } else {
    renderGlossary();
    renderArguments(toneKey);
    renderClaimResponseList(
      proofList,
      proofTextsData,
      toneKey,
      "No proof-text rebuttals matched your search."
    );
    renderClaimResponseList(
      replyList,
      commonRepliesData,
      toneKey,
      "No common replies matched your search."
    );
    renderDrilldown();
    renderTulipSlope();
  }
  renderContextViewer();
  renderLogicSummary(toneKey);
  renderComparison(toneKey);
}

if (toneSelect) {
  toneSelect.addEventListener("change", (event) => {
    currentTone = event.target.value;
    renderAllForTone(currentTone);
  });
}

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    currentSearchQuery = event.target.value.trim().toLowerCase();
    renderVerseCards(currentCategory);
    renderAllForTone(currentTone);
  });
}

if (searchClear) {
  searchClear.addEventListener("click", () => {
    currentSearchQuery = "";
    if (searchInput) {
      searchInput.value = "";
      searchInput.focus();
    }
    renderVerseCards(currentCategory);
    renderAllForTone(currentTone);
  });
}

if (glossaryInput) {
  glossaryInput.addEventListener("input", (event) => {
    currentGlossaryQuery = event.target.value.trim().toLowerCase();
    renderGlossary();
  });
}

if (glossaryClear) {
  glossaryClear.addEventListener("click", () => {
    currentGlossaryQuery = "";
    if (glossaryInput) {
      glossaryInput.value = "";
      glossaryInput.focus();
    }
    renderGlossary();
  });
}

if (contextSelect) {
  contextSelect.addEventListener("change", (event) => {
    currentContextReference = event.target.value;
    renderContextViewer();
  });
}

if (tabStudy) {
  tabStudy.addEventListener("click", () => {
    setView("study");
  });
}

if (tabCompare) {
  tabCompare.addEventListener("click", () => {
    setView("compare");
  });
}

window.addEventListener(
  "scroll",
  () => {
    updateScrollProgress();
    updateBackgroundParallax();
  },
  { passive: true }
);

window.addEventListener("resize", () => {
  updateScrollProgress();
  updateBackgroundParallax();
});

if (typeof prefersReducedMotion.addEventListener === "function") {
  prefersReducedMotion.addEventListener("change", () => {
    updateBackgroundParallax();
  });
}

setupRevealStagger();
renderFilters();
renderComparisonFilters();
renderVerseCards(currentCategory);
renderAllForTone(currentTone);
setView(currentView);
applyTiltEffects(document);
updateScrollProgress();
updateBackgroundParallax();
