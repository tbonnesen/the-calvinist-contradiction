const toneProfiles = {
  pastoral: {
    label: "Pastoral",
    subtitle:
      "A clear, kind Bible-first challenge to Calvinism and Replacement Theology using KJV references.",
    description:
      "Pastoral mode stays clear and gracious while still naming real contradictions in both topics.",
    intro:
      "This study tool helps believers test doctrine carefully without unnecessary hostility. It gathers major concerns with Calvinism and Replacement Theology and shows where key claims may conflict with plain KJV reading and basic logic.",
    logicSummary: [
      "If people are blamed for unbelief, calls to believe should still be real and meaningful.",
      "If Christ is presented as a provision for the world, readers naturally expect a truly broad gospel offer.",
      "If God ties promises to Israel with lasting covenant language, total-erasure claims need very strong proof from the text."
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


const argumentsData = [
  {
    title: "Total Inability vs God's Universal Call",
    tones: {
      pastoral: {
        claim:
          "Calvinism says people cannot come to saving faith unless God gives special grace, yet Scripture repeatedly gives broad calls to repent and come.",
        logic:
          "Even if a command does not by itself prove ability, Scripture still gives real reasons for unbelief, not only statements about decree."
      },
      debate: {
        claim:
          "Total inability, as commonly framed, creates tension with global repentance commands that address all hearers.",
        logic:
          "The issue is not merit-based ability but explanatory coherence: if inability alone explains unbelief, texts saying wherefore? because they sought it not by faith become hard to treat as genuine reasons."
      },
      academic: {
        claim:
          "The Calvinist inability thesis is difficult to reconcile with the breadth of universal imperative language in evangelistic texts.",
        logic:
          "A coherent account should keep both truths together: grace is necessary, commands are sincere summons, and unbelief-explanations retain causal force without assuming command equals native ability."
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
      },
      {
        reference: "Romans 9:30-32 (KJV)",
        passage:
          "What shall we say then? That the Gentiles, which followed not after righteousness, have attained to righteousness, even the righteousness which is of faith. But Israel, which followed after the law of righteousness, hath not attained to the law of righteousness. Wherefore? Because they sought it not by faith, but as it were by the works of the law."
      }
    ]
  },
  {
    title: "Unconditional Election vs God's Impartial Character",
    tones: {
      pastoral: {
        claim:
          "Unconditional election is often presented as a gracious mystery. Even so, it raises hard questions beside texts about God's impartial judgment and broad saving desire.",
        logic:
          "This is not a one-verse argument. A strong model should explain how impartial-judgment texts, 1 Timothy 2's all men/kings flow, and 2 Peter 3:9 us-ward readings fit together without emptying universal command language."
      },
      debate: {
        claim:
          "Unconditional election faces synthesis pressure from texts saying God is no respecter of persons and calling all to repentance.",
        logic:
          "A selective decree can be argued, but then justice/mercy categories and decretive/preceptive distinctions must be explicit and text-governed, including why 1 Timothy 2 narrows to classes if that is claimed and how 2 Peter 3:9's audience language is handled."
      },
      academic: {
        claim:
          "The doctrine of unconditional election must be synthesized with texts on divine impartiality and broad salvific intent.",
        logic:
          "Romans 2:11 speaks first to impartial judgment; when read with 1 Timothy 2 and 2 Peter 3:9, it demands category distinctions demonstrated from immediate argument-flow, not only from a systematic grid."
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
        reference: "1 Timothy 2:1-6 (KJV)",
        passage:
          "I exhort therefore, that, first of all, supplications, prayers, intercessions, and giving of thanks, be made for all men; For kings, and for all that are in authority; that we may lead a quiet and peaceable life in all godliness and honesty. For this is good and acceptable in the sight of God our Saviour; Who will have all men to be saved, and to come unto the knowledge of the truth. For there is one God, and one mediator between God and men, the man Christ Jesus; Who gave himself a ransom for all, to be testified in due time."
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
          "Many believers struggle because Calvinism limits atonement while Scripture often speaks of Christ's provision in broad terms like world and every man.",
        logic:
          "If Christ's death is never for those who finally perish in any sense, broad gospel language can sound narrower than the text itself."
      },
      debate: {
        claim:
          "Particular redemption can be argued, but it requires passage-level reasons for narrowing world and every man in each text, not one global rule.",
        logic:
          "In 1 John 2:2, ours only versus whole world is a direct contrast, and Hebrews 2:9 says every man. Those need explicit local narrowing arguments, not default compression."
      },
      academic: {
        claim:
          "Particular redemption proposals must account for repeated universal-scope expressions in Johannine and Hebrews texts.",
        logic:
          "A narrower referent is plausible where context compels it; however, recurring broad terms plus contrast structures and immediate discourse flow require more than a generalized all-kinds appeal."
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
          "Calvinism teaches that saving grace is ultimately irresistible for the elect, yet many passages speak of people resisting God's appeal.",
        logic:
          "When people are said to resist and refuse, the text reads like real responsibility, not just surface-level opposition."
      },
      debate: {
        claim:
          "Irresistible grace must account for direct statements that people resist the Spirit and refuse Christ.",
        logic:
          "The outward/inward call distinction can be coherent as theology, but if draw in John 6 is always effectual while draw in John 12 is universal, the model must explain verb continuity without collapsing into universalism or semantic split."
      },
      academic: {
        claim:
          "The irresistible grace thesis must reconcile with narratives and discourses depicting persistent human refusal of divine initiative.",
        logic:
          "Exegetically, resistance language carries agency weight; synthesis models should show textual markers for distinctions between common and effectual operations, including how shared draw-language is being used."
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
      },
      {
        reference: "John 12:32 (KJV)",
        passage:
          "And I, if I be lifted up from the earth, will draw all men unto me."
      },
      {
        reference: "John 6:44 (KJV)",
        passage:
          "No man can come to me, except the Father which hath sent me draw him: and I will raise him up at the last day."
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
          "Scripture gives both assurance and warning. Any model should keep warnings urgent for the brethren being addressed without weakening either side."
      },
      debate: {
        claim:
          "Perseverance certainty must account for warning texts describing severe danger after real covenant participation language, while also honoring assurance passages.",
        logic:
          "A means framework may be coherent, but it must show where a warning shifts from regenerate addressees to mixed-audience hypotheticals rather than assuming that shift."
      },
      academic: {
        claim:
          "Perseverance models face interpretive friction with warning pericopes that present post-enlightenment apostasy scenarios.",
        logic:
          "The pragmatic function of warning discourse is weakened if the warned outcome is categorically impossible for the addressed group, unless mixed-audience and means categories are argued from explicit audience markers and integrated with assurance texts."
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
      },
      {
        reference: "John 10:28 (KJV)",
        passage:
          "And I give unto them eternal life; and they shall never perish, neither shall any man pluck them out of my hand."
      },
      {
        reference: "Philippians 1:6 (KJV)",
        passage:
          "Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ:"
      },
      {
        reference: "Hebrews 3:12 (KJV)",
        passage:
          "Take heed, brethren, lest there be in any of you an evil heart of unbelief, in departing from the living God."
      }
    ]
  },
  {
    title: "Sovereignty and Providence vs Exhaustive Determinism",
    tones: {
      pastoral: {
        claim:
          "Christians can fully affirm God's sovereignty without saying every human decision is caused in the same deterministic way.",
        logic:
          "The Bible shows God governing history and still holding people accountable for real refusal, so providence should not be collapsed into exhaustive causal necessity."
      },
      debate: {
        claim:
          "Sovereignty language does not automatically prove meticulous determinism of every intention and belief.",
        logic:
          "Texts like Acts 2:23 and Genesis 50:20 show one event with divine purpose and human evil intent. That supports robust providence, not a forced identity between sovereignty and universal necessitation."
      },
      academic: {
        claim:
          "Classical sovereignty claims require careful distinction between teleological governance, concurrence, permission, and causal necessitation.",
        logic:
          "A coherent model can affirm decisive providence while refusing lexical collapse between ordain, foreknow, and determine. Exegetical burden remains passage-specific."
      }
    },
    references: [
      {
        reference: "Acts 2:23 (KJV)",
        passage:
          "Him, being delivered by the determinate counsel and foreknowledge of God, ye have taken, and by wicked hands have crucified and slain:"
      },
      {
        reference: "Genesis 50:20 (KJV)",
        passage:
          "But as for you, ye thought evil against me; but God meant it unto good, to bring to pass, as it is this day, to save much people alive."
      },
      {
        reference: "James 1:13 (KJV)",
        passage:
          "Let no man say when he is tempted, I am tempted of God: for God cannot be tempted with evil, neither tempteth he any man:"
      },
      {
        reference: "Psalm 115:3 (KJV)",
        passage:
          "But our God is in the heavens: he hath done whatsoever he hath pleased."
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
        "Romans 9 strongly stresses God's freedom, including the question, Why doth he yet find fault? We should take that seriously. But Paul still says they sought it not by faith, so both sovereignty and unbelief matter in his argument.",
      debate:
        "The strongest Reformed case is Romans 9:18-24 plus 9:19. The strongest counter is Paul's own explanation in 9:30-32 and 10:21, where unbelief is treated as a real reason, not only a label for what happened. Group-election language should not be used to skip that wherefore logic.",
      academic:
        "Romans 9 should be read within Romans 9-11 as a whole: divine freedom, covenant history, and explicit faith/unbelief explanations. The 9:19 objection raises accountability questions, yet Paul's own wherefore and stretched-forth-hands language still gives explanatory weight to unbelief and prevents easy collapse from corporate argument to exhaustive individual causality."
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
        "Romans 9:11-13 is weighty and should not be minimized. Paul uses real individuals to show pre-birth divine choice not based on works. Even so, the oracle language about the elder serving the younger keeps covenant-history in view, so this text alone does not settle every final-destiny detail.",
      debate:
        "Reformed readers rightly stress individuals are in view and that Paul expects justice objections. The counter is not individuals versus nations; it is scope of conclusion. The text proves pre-birth discriminating choice and divine freedom, but full individual reprobation mechanics require additional passages.",
      academic:
        "Intertextual control matters: Romans 9:13 cites Malachi and echoes Genesis 25:23. The twins function as individual exemplars inside a covenant-historical argument. Methodologically, the unit secures calling-over-works priority while underdetermining a complete doctrine of individual reprobation."
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
        "Paul's rebuke in Romans 9 is strong and clearly teaches God's rights over the clay. That should be granted. Jeremiah 18 can illuminate background themes, but Romans 9 itself controls the claim; the key question is whether verses 22-23 teach strict symmetry or a textual asymmetry.",
      debate:
        "The strongest Reformed case is same lump plus why doth he yet find fault. Even granting that force, verse 22 is framed with what if and endured in longsuffering, while verse 23 explicitly attributes afore prepared to mercy vessels. That asymmetry is textual, not imported.",
      academic:
        "The potter metaphor should be read with both immediate context and intertext. Jeremiah 18 offers useful background but does not override Paul's local argument. Romans 9:22-23's hypothetical framing, longsuffering, and non-identical preparation language complicate strict symmetric reprobation models."
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
        "John 6 clearly teaches divine initiative: no one can come unless drawn, and all given will come. But the same discourse also says ye have seen me, and believe not, and speaks of hearing and learning, so refusal is still real in the text.",
      debate:
        "A serious Calvinist reading leans on John 6:37 and 6:44. A serious counter-reading must also lean on 6:36, 6:40, and 6:45, where coming is described through seeing, believing, hearing, and learning. The burden is to explain effectual grace without emptying those terms.",
      academic:
        "John 6 includes both initiative and response language: gift, drawing, hearing/learning, believing, and explicit unbelief statements. Any irresistible-grace model should explain how refusal language remains explanatorily meaningful, not merely descriptive, and should avoid collapsing grant-language into a denial of the chapter's hear/learn structure."
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
    title: "John 6:65 (Granted by the Father)",
    claimLabel: "Calvinist Reading",
    responseLabel: "Response",
    claim:
      "No one can come unless it is granted by the Father, therefore coming is unconditional election for a fixed individual subset.",
    tones: {
      pastoral:
        "John 6:65 is a strong statement of divine initiative and should be taken seriously. The same chapter still addresses hearers as responsible for unbelief and ties coming language to hearing and learning.",
      debate:
        "A strong Reformed case reads granted as effectual and selective. A strong counter asks whether this verse settles unconditional election by itself when John also uses refusal language and hearing-learning categories in the same discourse.",
      academic:
        "Verse 65 reiterates incapacity apart from divine grant and belongs to the larger 6:36-45 unit. Exegetical judgment should integrate grant, draw, hear/learn, and explicit unbelief statements before deriving a full conversion-causality system."
    },
    references: [
      {
        reference: "John 6:65 (KJV)",
        passage:
          "And he said, Therefore said I unto you, that no man can come unto me, except it were given unto him of my Father."
      },
      {
        reference: "John 6:44 (KJV)",
        passage:
          "No man can come to me, except the Father which hath sent me draw him: and I will raise him up at the last day."
      },
      {
        reference: "John 6:45 (KJV)",
        passage:
          "It is written in the prophets, And they shall be all taught of God. Every man therefore that hath heard, and hath learned of the Father, cometh unto me."
      },
      {
        reference: "John 5:40 (KJV)",
        passage:
          "And ye will not come to me, that ye might have life."
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
        "Ephesians 1 celebrates God's saving plan in Christ and the blessings believers now enjoy in him. Reformed readers rightly see personal election language here, yet the chapter also ties participation to hearing and believing the gospel in time.",
      debate:
        "A strong Reformed reading sees pretemporal personal election in Ephesians 1. The counter is not to deny that possibility, but to note that in Christ structures the paragraph and verse 13 still presents hearing/believing as the historical means of inclusion.",
      academic:
        "The controlling phrase in Christ supports a corporate-Christocentric frame while remaining compatible with personal election claims. Ephesians 1:13 adds temporal appropriation through hearing and belief, so the passage should not be used in isolation to settle every conversion-causality question."
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
        "John 10 includes a hard causal line: ye believe not, because ye are not of my sheep. That must be taken seriously. Even so, John also presents public calls to believe and moral blame for refusing light.",
      debate:
        "The strongest Reformed reading takes identity-to-belief causality from John 10:26. A strong counter argues this scene addresses hardened opponents and should be integrated with wider Johannine command, invitation, and culpability texts rather than treated as a stand-alone metaphysical rule.",
      academic:
        "John 10 identity language should be interpreted within the Gospel's broader belief-unbelief discourse. Exegesis must account for local causality claims while also integrating global Johannine imperatives and blame-language."
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
        "Acts 13:48 is an important text on divine initiative and should be handled carefully. The ordinary reading of ordained points to divine appointment. In the same scene, Luke also says some judge themselves unworthy of everlasting life, so appointment and accountability are both present.",
      debate:
        "The strongest Calvinist reading takes tetagmenoi as divine appointment to life, and that should be conceded as weighty. Even then, verse 48 explains why believers believed, while verse 46 still assigns culpable rejection to hearers, so total explanatory closure is not achieved by one clause.",
      academic:
        "The lexical/syntactical debate around tetagmenoi should be read with immediate contrast: appointment language in v48 and explicit self-rejection in v46. A high-providence reading is textually strong; a full reprobation-causality model remains a further inference."
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
    title: "Acts 4:27-28 (Crucifixion and Dual Causation)",
    claimLabel: "Calvinist Reading",
    responseLabel: "Response",
    claim:
      "Acts 4:28 proves exhaustive determinism because God predestined the crucifixion, so all sinful intentions in that event were equally determined.",
    tones: {
      pastoral:
        "Acts 4 is a key text and should be treated with care. It clearly says Christ's death occurred according to God's counsel. The same passage still names human agents as morally accountable, so providence and blame must both stay real.",
      debate:
        "The strongest Reformed use of Acts 4 is that God's hand and counsel determined this event. The counterpoint is scope: this proves purposeful ordination of the cross, not automatically a universal thesis that every human intention is determined in the same way.",
      academic:
        "Acts 4:27-28 and Acts 2:23 support a robust providence model in which one event carries divine teleology and creaturely culpability simultaneously. Inferring exhaustive causal determinism for all acts from this redemptive-historical node requires additional premises not explicit in the text."
    },
    references: [
      {
        reference: "Acts 4:27-28 (KJV)",
        passage:
          "For of a truth against thy holy child Jesus, whom thou hast anointed, both Herod, and Pontius Pilate, with the Gentiles, and the people of Israel, were gathered together, For to do whatsoever thy hand and thy counsel determined before to be done."
      },
      {
        reference: "Acts 2:23 (KJV)",
        passage:
          "Him, being delivered by the determinate counsel and foreknowledge of God, ye have taken, and by wicked hands have crucified and slain:"
      },
      {
        reference: "Genesis 50:20 (KJV)",
        passage:
          "But as for you, ye thought evil against me; but God meant it unto good, to bring to pass, as it is this day, to save much people alive."
      },
      {
        reference: "James 1:13 (KJV)",
        passage:
          "Let no man say when he is tempted, I am tempted of God: for God cannot be tempted with evil, neither tempteth he any man:"
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
        "Romans 8 gives deep comfort to believers, and the golden chain is personal and weighty. The question is not whether God completes his saving work, but whether this assurance text by itself settles every warning text and every pre-conversion causality question.",
      debate:
        "Using Romans 8 as a full system lock can overextend the passage. The chain strongly supports divine certainty for the justified, but warnings and conditionals elsewhere still require integration rather than cancellation.",
      academic:
        "Romans 8:29-30 should be read as high-assurance discourse with personal chain logic. It need not be collapsed into either mere corporate abstraction or a total metaphysical map that nullifies all warning discourse; intertextual synthesis remains required."
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
        "Salvation is fully by grace, and Reformed readers rightly guard that point. The passage still includes through faith language, and Scripture continues to call hearers to believe in ways treated as sincere and accountable.",
      debate:
        "Grace alone does not automatically imply irresistibly implanted faith for a preselected group; the text itself does not explicitly make that leap and must be integrated with broader call-and-response passages.",
      academic:
        "Ephesians 2:8-9 affirms grace-based salvation and excludes boasting, including strong monergist concerns. The passage does not by itself settle debates over the mechanics, sequencing, and scope of faith enablement."
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
  },
  {
    title: "Ephesians 5:25",
    claimLabel: "Calvinist Reading",
    responseLabel: "Response",
    claim:
      "Christ loved the church and gave himself for her, so his atoning death was only for the elect church.",
    tones: {
      pastoral:
        "Ephesians 5 does teach Christ's special covenant love for his church, and that should be affirmed clearly. The text says he gave himself for her; it does not by itself add only for her as an exclusion of all gospel offer language elsewhere.",
      debate:
        "This proof-text often assumes what it needs to prove: that church means a pre-limited atonement target rather than the redeemed people formed through the gospel call. Special marital-covenant love does not cancel broader atonement and invitation texts.",
      academic:
        "Ephesians 5:25-27 is ecclesiological and sanctificational in argument-flow: Christ's self-giving for the church grounds husbandly love and church-cleansing imagery. Exclusive-extent conclusions require additional premises not explicitly supplied by this local pericope."
    },
    references: [
      {
        reference: "Ephesians 5:25-27 (KJV)",
        passage:
          "Husbands, love your wives, even as Christ also loved the church, and gave himself for it; That he might sanctify and cleanse it with the washing of water by the word, That he might present it to himself a glorious church, not having spot, or wrinkle, or any such thing; but that it should be holy and without blemish."
      },
      {
        reference: "John 3:16 (KJV)",
        passage:
          "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."
      },
      {
        reference: "1 John 2:2 (KJV)",
        passage:
          "And he is the propitiation for our sins: and not for ours only, but also for the sins of the whole world."
      },
      {
        reference: "1 Timothy 2:3-4 (KJV)",
        passage:
          "For this is good and acceptable in the sight of God our Saviour; Who will have all men to be saved, and to come unto the knowledge of the truth."
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
        "Context can narrow terms, and sometimes it truly does. The concern is narrowing by default when passages are framed as broad contrast or broad invitation.",
      debate:
        "All-kinds readings can be valid in context, especially in 1 Timothy 2's kings/all-men flow. But repeated narrowing still needs passage-by-passage proof, especially where wording is deliberately expansive.",
      academic:
        "Semantic restriction is legitimate when context requires it. A strong method allows class-language where context signals it, yet still requires local warrants when texts use broad contrasts such as ours only and whole world."
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
        "This is a fair concern: a chosen people includes real people. The key is to read those group promises with passages showing how people enter and continue through hearing and believing.",
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
        "This distinction can be a sincere effort to honor all texts, and that should be acknowledged. The concern is when it starts to override plain invitation and warning texts too quickly.",
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
        "It is right to insist the cross truly saves and does not fail. Scripture also distinguishes what Christ accomplished from how forgiveness is applied through faith, which avoids both mere possibility and universalism.",
      debate:
        "A strong non-Calvinist answer should grant definite efficacy concerns, then keep categories clear: sufficient for all, savingly effective for believers. It should also engage Reformed covenantal readings of texts like 2 Peter 2:1 rather than bypassing them.",
      academic:
        "Reformed impetration/application distinctions can be coherent and should be acknowledged. The critique targets category-collapse claims, while also interacting with alternative lexical proposals (for example, covenant/master readings) on disputed texts such as 2 Peter 2:1."
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
        "Seeking God does not earn grace. In Acts, Cornelius's story starts with God's initiative, yet he still must hear and believe the gospel to receive forgiveness.",
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
    title: "Repent and be saved are related but not identical claims",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "Because God alone saves, repentance and salvation should be treated as one collapsed event in argumentation.",
    tones: {
      pastoral:
        "Repentance and salvation belong together in Scripture, but they are not the same claim. God commands repentance broadly and promises forgiveness through faith in Christ.",
      debate:
        "Collapsing repent and be saved creates a category error. Human responsibility to repent is not equivalent to saying sinners save themselves.",
      academic:
        "A careful model distinguishes summons-response categories from forensic-remissive outcome categories. Conflation here distorts both command texts and salvation-application texts."
    },
    references: [
      {
        reference: "Acts 17:30 (KJV)",
        passage:
          "And the times of this ignorance God winked at; but now commandeth all men every where to repent:"
      },
      {
        reference: "Acts 11:14 (KJV)",
        passage:
          "Who shall tell thee words, whereby thou and all thy house shall be saved."
      },
      {
        reference: "Acts 16:31 (KJV)",
        passage:
          "And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house."
      },
      {
        reference: "John 3:18 (KJV)",
        passage:
          "He that believeth on him is not condemned: but he that believeth not is condemned already."
      }
    ]
  },
  {
    title: "Praying for conversion does not prove irresistible causation",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "Because believers pray for others to be saved, prayer itself proves conversion is unilaterally and irresistibly caused.",
    tones: {
      pastoral:
        "Prayer shows dependence on God, not a full deterministic mechanism. Scripture presents prayer, preaching, and response together.",
      debate:
        "The prayer argument can overreach. Asking God to work does not by itself prove that no meaningful human response is involved.",
      academic:
        "Intercessory practice evidences divine dependence but underdetermines a specific conversion-causality model. New Testament prayer discourse is integrated with proclamation and accountable response."
    },
    references: [
      {
        reference: "1 Timothy 2:1-6 (KJV)",
        passage:
          "I exhort therefore, that, first of all, supplications, prayers, intercessions, and giving of thanks, be made for all men; For kings, and for all that are in authority; that we may lead a quiet and peaceable life in all godliness and honesty. For this is good and acceptable in the sight of God our Saviour; Who will have all men to be saved, and to come unto the knowledge of the truth. For there is one God, and one mediator between God and men, the man Christ Jesus; Who gave himself a ransom for all, to be testified in due time."
      },
      {
        reference: "Romans 10:1 (KJV)",
        passage:
          "Brethren, my heart's desire and prayer to God for Israel is, that they might be saved."
      },
      {
        reference: "Colossians 4:3 (KJV)",
        passage:
          "Withal praying also for us, that God would open unto us a door of utterance, to speak the mystery of Christ."
      },
      {
        reference: "2 Thessalonians 3:1 (KJV)",
        passage:
          "Finally, brethren, pray for us, that the word of the Lord may have free course, and be glorified."
      }
    ]
  },
  {
    title: "Will happen is not the same as must happen",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "If God infallibly knows what will happen, then the event must happen by the same kind of causal necessity.",
    tones: {
      pastoral:
        "God's perfect knowledge is certain, but certainty and coercion are not identical ideas. Scripture can present foretold events and still speak with real woe and warning language.",
      debate:
        "This is a modal jump: from certainty to necessity by definition. The burden is to prove causal necessitation, not assume it from foreknowledge alone.",
      academic:
        "The inference from epistemic certainty to metaphysical necessity is non-trivial and requires argument. Biblical texts can couple determined outcomes with culpability language without lexical identity between foreknowledge and efficient causation."
    },
    references: [
      {
        reference: "Luke 22:22 (KJV)",
        passage:
          "And truly the Son of man goeth, as it was determined: but woe unto that man by whom he is betrayed!"
      },
      {
        reference: "Acts 2:23 (KJV)",
        passage:
          "Him, being delivered by the determinate counsel and foreknowledge of God, ye have taken, and by wicked hands have crucified and slain:"
      },
      {
        reference: "1 Corinthians 10:13 (KJV)",
        passage:
          "There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a way to escape."
      }
    ]
  },
  {
    title: "Programmed obedience is not the same as covenant love",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "If God fully determines every moral decision, love and obedience remain equally meaningful because outcomes still match his plan.",
    tones: {
      pastoral:
        "Love in Scripture is relational and covenantal, not robotic performance. Commands to choose, repent, and return are given as meaningful summons.",
      debate:
        "If every yes and no is equally necessitated at the same level, biblical love-language can start sounding like scripted output. Any determinist model should explain how choice-language keeps practical force.",
      academic:
        "The concern is not anti-sovereignty rhetoric; it is semantic integrity. Volitional covenant terms such as choose and ye would not should retain non-trivial agency content under proposed causal models."
    },
    references: [
      {
        reference: "Deuteronomy 30:19 (KJV)",
        passage:
          "I have set before you life and death, blessing and cursing: therefore choose life."
      },
      {
        reference: "Joshua 24:15 (KJV)",
        passage:
          "Choose you this day whom ye will serve."
      },
      {
        reference: "Matthew 23:37 (KJV)",
        passage:
          "O Jerusalem, Jerusalem, thou that killest the prophets, and stonest them which are sent unto thee, how often would I have gathered thy children together, and ye would not!"
      },
      {
        reference: "John 14:15 (KJV)",
        passage: "If ye love me, keep my commandments."
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
        "These categories can be useful and should not be mocked. A clear model says God rules over events and overrules evil for good, while creatures alone own sinful intent.",
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
        "The revealed/decretive distinction is a serious theological tool, not a cheap dodge. The question is whether God's commands and invitations still carry their full force in real life.",
      debate:
        "A strong Reformed case can read us-ward in 2 Peter 3:9 covenantally and all in 1 Timothy 2 as classes. Even then, Acts 17:30 and the public prayer/ransom flow still require a clear account of sincere universal command and offer.",
      academic:
        "The preceptive/decretive distinction has real historical and theological value. Its adequacy should be tested by whether it preserves the stated scope and argument-flow of repentance-command, public-prayer, and ransom-for-all passages under competing audience analyses."
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
        "Humility before God is right, and Romans 9 does rebuke arrogant creaturely protest. Scripture also calls believers to examine teachings carefully, so reverence and rigorous testing should work together.",
      debate:
        "Invoking mystery can be appropriate at limits of creaturely knowledge, but it is not a substitute for exegesis. It can shut down valid textual and logical analysis when used too early.",
      academic:
        "Appeals to creaturely limitation can set epistemic boundaries, but they do not remove the need for coherent exegesis and theological consistency across the canon."
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
        "Receiving a gift does not mean earning a gift. Scripture can affirm grace as the sole saving source while still speaking of faith as a real response enabled by grace.",
      debate:
        "This is often framed as a false dilemma: either monergistic irresistibility or works-righteousness. The New Testament presents grace primacy alongside accountable response language.",
      academic:
        "Synergistic response does not entail merit causation by definition. One can preserve grace primacy while retaining meaningful human assent and resistance categories, though formulations must guard anti-Pelagian boundaries."
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
        "God may use warnings as means, but believers are still taught to hear them as real cautions with real consequences if ignored. When Hebrews addresses brethren directly, the warning is meant to be felt, not merely observed.",
      debate:
        "If the threatened outcome cannot happen for any addressed true believer, warning language risks sounding performative rather than genuinely cautionary. Mixed-audience proposals must be shown from local audience markers, not assumed.",
      academic:
        "Instrumental-warning models should still explain direct contingency forms and audience-address features (for example brethren address) without treating warnings as merely hypothetical rhetoric, while also integrating assurance passages."
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
      },
      {
        reference: "John 10:28 (KJV)",
        passage:
          "And I give unto them eternal life; and they shall never perish, neither shall any man pluck them out of my hand."
      },
      {
        reference: "Philippians 1:6 (KJV)",
        passage:
          "Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ:"
      }
    ]
  },
  {
    title: "I am not interpreting, I am just reading the text",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "The biblical wording is plain, so interpretive objections are just evasions.",
    tones: {
      pastoral:
        "Scripture is clear on many core truths, but every reading still involves interpretation. Good faith study asks what the author meant in context, not only what a phrase sounds like in modern shorthand.",
      debate:
        "No one reads without interpretation. Genre, covenant context, lexical range, and discourse flow are not liberal extras; they are basic exegesis.",
      academic:
        "The claim collapses hermeneutics into surface-level lexical immediacy. Responsible interpretation requires authorial-intent controls: historical setting, intertextual echoes, argument-flow, and semantic range."
    },
    references: [
      {
        reference: "2 Timothy 2:15 (KJV)",
        passage:
          "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth."
      },
      {
        reference: "Luke 24:27 (KJV)",
        passage:
          "And beginning at Moses and all the prophets, he expounded unto them in all the scriptures the things concerning himself."
      },
      {
        reference: "2 Peter 3:16 (KJV)",
        passage:
          "In which are some things hard to be understood, which they that are unlearned and unstable wrest, as they do also the other scriptures, unto their own destruction."
      }
    ]
  },
  {
    title: "Calvinism comes from the totality of Scripture",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "Even if no single text states all Calvinist conclusions explicitly, the whole canon together requires that system.",
    tones: {
      pastoral:
        "Whole-Bible theology is right and necessary. The concern is when totality language is used to bypass close passage-level testing.",
      debate:
        "A system must be shown text by text, not asserted by slogan. If a claim cannot be grounded in concrete exegesis, totality language can become a shield for assumptions.",
      academic:
        "Canonical synthesis is essential but method-governed. Legitimate whole-Bible claims require demonstrable inferential steps from specific pericopes rather than global-system assertion."
    },
    references: [
      {
        reference: "Acts 17:11 (KJV)",
        passage:
          "These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily, whether those things were so."
      },
      {
        reference: "1 Thessalonians 5:21 (KJV)",
        passage:
          "Prove all things; hold fast that which is good."
      },
      {
        reference: "Isaiah 28:10 (KJV)",
        passage:
          "For precept must be upon precept, precept upon precept; line upon line, line upon line; here a little, and there a little."
      }
    ]
  },
  {
    title: "There are no maverick molecules, therefore determinism",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "If God is truly sovereign, every event and micro-event must be causally determined by him.",
    tones: {
      pastoral:
        "God's sovereignty means nothing surprises or defeats him. That does not require saying every created movement is causally necessitated in the same way.",
      debate:
        "Sovereignty and exhaustive determination are not identical terms. God can foreknow, govern, and ordain outcomes without reducing all creaturely action to direct causal necessitation.",
      academic:
        "The inference moves from providential supremacy to meticulous causal determinism without argument. A stronger model distinguishes governance, concurrence, permission, and teleological ordination."
    },
    references: [
      {
        reference: "Psalm 115:3 (KJV)",
        passage:
          "But our God is in the heavens: he hath done whatsoever he hath pleased."
      },
      {
        reference: "Daniel 4:35 (KJV)",
        passage:
          "And all the inhabitants of the earth are reputed as nothing: and he doeth according to his will in the army of heaven, and among the inhabitants of the earth."
      },
      {
        reference: "Proverbs 16:9 (KJV)",
        passage:
          "A man's heart deviseth his way: but the LORD directeth his steps."
      }
    ]
  },
  {
    title: "Ordain and decree always mean determine",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "If God ordains or decrees an outcome, that means he directly determines every will-action involved in that outcome.",
    tones: {
      pastoral:
        "Scripture affirms God's purpose and decree, yet it also keeps creaturely blame and intention meaningful. Those truths should be held together without semantic collapsing.",
      debate:
        "Treating ordain as a synonym for determine is a category move, not an exegetical necessity. Biblical narratives often show one event with distinct divine and human intentions.",
      academic:
        "A lexical identity claim between ordination language and exhaustive causal determination is underargued. Texts such as Acts 2:23 and Genesis 50:20 support multi-agent intentional asymmetry."
    },
    references: [
      {
        reference: "Acts 2:23 (KJV)",
        passage:
          "Him, being delivered by the determinate counsel and foreknowledge of God, ye have taken, and by wicked hands have crucified and slain:"
      },
      {
        reference: "Genesis 50:20 (KJV)",
        passage:
          "But as for you, ye thought evil against me; but God meant it unto good, to bring to pass, as it is this day, to save much people alive."
      },
      {
        reference: "James 1:13 (KJV)",
        passage:
          "Let no man say when he is tempted, I am tempted of God: for God cannot be tempted with evil, neither tempteth he any man:"
      }
    ]
  },
  {
    title: "Only eight were saved in the flood, so broad saving desire is irrelevant",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "The flood shows God only saves a tiny subset, so universal-offer and broad-desire claims should not shape soteriology.",
    tones: {
      pastoral:
        "The flood is a severe judgment text and should be treated with reverence. It does not automatically settle every New Testament soteriology question about Christ's atonement scope and universal command language.",
      debate:
        "Temporal judgment in Noah's generation is not identical to proving a fixed eternal-atonement extent model. Category distinctions matter: historical judgment, gospel proclamation, and final salvation discourse are not interchangeable.",
      academic:
        "The argument risks illicit transfer between narrative-judgment context and doctrinal-extent conclusions. Proper method requires contextual differentiation across covenants and discourse genres."
    },
    references: [
      {
        reference: "Genesis 6:5 (KJV)",
        passage:
          "And GOD saw that the wickedness of man was great in the earth, and that every imagination of the thoughts of his heart was only evil continually."
      },
      {
        reference: "1 Peter 3:20 (KJV)",
        passage:
          "When once the longsuffering of God waited in the days of Noah, while the ark was a preparing, wherein few, that is, eight souls were saved by water."
      },
      {
        reference: "2 Peter 3:9 (KJV)",
        passage:
          "The Lord is not slack concerning his promise, as some men count slackness; but is longsuffering to us-ward, not willing that any should perish, but that all should come to repentance."
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
        "Scripture uses dead language for serious spiritual inability and alienation, and that point should be granted. It also calls sinners to repent and treats refusal as blameworthy within God's appointed means.",
      debate:
        "Reformed readers are right that dead language includes inability categories. The counter is that inability language need not erase command-responsibility or reduce all dead metaphors to one metaphysical template.",
      academic:
        "Death language should be interpreted by discourse function and canonical usage. It can denote profound inability while still operating within imperative/blame frameworks that preserve responsible address."
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
  },
  {
    title: "Predestination, determination, and sovereignty always mean the same thing",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "If God is sovereign and predestines outcomes, determination is implied and the terms are interchangeable.",
    tones: {
      pastoral:
        "These words are related, so confusion is easy. But they are not always identical in meaning. Clear definitions help both sides avoid talking past each other.",
      debate:
        "This is often a definition drift move. Sovereignty and predestination can be affirmed without proving exhaustive causal determination in every case. The burden is to show the equivalence from specific texts, not assume it.",
      academic:
        "A semantic-equivalence thesis across sovereignty, predestination, and determination is under-argued unless lexical and discourse controls are supplied per context. Category distinction is not doctrinal evasion; it is basic method."
    },
    references: [
      {
        reference: "Acts 4:27-28 (KJV)",
        passage:
          "For of a truth against thy holy child Jesus, whom thou hast anointed, both Herod, and Pontius Pilate, with the Gentiles, and the people of Israel, were gathered together, For to do whatsoever thy hand and thy counsel determined before to be done."
      },
      {
        reference: "Romans 9:30-32 (KJV)",
        passage:
          "What shall we say then? That the Gentiles, which followed not after righteousness, have attained to righteousness, even the righteousness which is of faith. But Israel, which followed after the law of righteousness, hath not attained to the law of righteousness. Wherefore? Because they sought it not by faith, but as it were by the works of the law."
      },
      {
        reference: "Proverbs 18:13 (KJV)",
        passage:
          "He that answereth a matter before he heareth it, it is folly and shame unto him."
      }
    ]
  },
  {
    title: "Compatibilism only requires responsibility language, not libertarian freedom",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "Compatibilism does not need libertarian freedom; it only requires real responsibility under divine determination.",
    tones: {
      pastoral:
        "That is a serious and historic claim, and it should be heard fairly. The question is whether biblical summons, blame, and warning language still function as more than description when outcomes are fixed.",
      debate:
        "This is the strongest Reformed defense and should be engaged at full strength. The challenge is operational: do ye would not, wherefore, and if ye continue statements retain explanatory force or become retrospective labels?",
      academic:
        "Compatibilist responsibility claims are internally coherent in many analytic models. The present critique is text-functional: whether imperative, explanatory, and conditional discourse in Scripture preserves practical contingency under an exhaustive deterministic frame."
    },
    references: [
      {
        reference: "John 5:40 (KJV)",
        passage: "And ye will not come to me, that ye might have life."
      },
      {
        reference: "Romans 10:21 (KJV)",
        passage:
          "But to Israel he saith, All day long I have stretched forth my hands unto a disobedient and gainsaying people."
      },
      {
        reference: "Colossians 1:22-23 (KJV)",
        passage:
          "In the body of his flesh through death, to present you holy and unblameable and unreproveable in his sight: If ye continue in the faith grounded and settled, and be not moved away from the hope of the gospel."
      }
    ]
  },
  {
    title: "Corporate and individual election are a forced either-or",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "Either election is corporate or individual; once individual election is admitted, Calvinist determinism follows.",
    tones: {
      pastoral:
        "Scripture can speak at both levels: a chosen people and real persons within that people. A balanced reading does not force an unnecessary either-or.",
      debate:
        "Admitting individual election does not automatically prove exhaustive determinism. The key dispute remains conversion-causality and accountability, not whether persons are included in election language.",
      academic:
        "Corporate and individual election are analytically distinguishable but not mutually exclusive categories. Determinist conclusions require further argument about causal mechanism, not merely ontological granularity."
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
        reference: "Romans 9:30-32 (KJV)",
        passage:
          "What shall we say then? That the Gentiles, which followed not after righteousness, have attained to righteousness, even the righteousness which is of faith. But Israel, which followed after the law of righteousness, hath not attained to the law of righteousness. Wherefore? Because they sought it not by faith, but as it were by the works of the law."
      }
    ]
  },
  {
    title: "Appeal to mystery resolves contradiction by itself",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "If a tension is difficult, appeal to divine mystery should end the critique without further analysis.",
    tones: {
      pastoral:
        "Some things are truly mysterious, and humility is right. Still, Scripture also tells us to test and reason, so mystery should be the end of careful work, not the start.",
      debate:
        "Mystery is not a free pass for contradiction. A strong approach distinguishes what is beyond us from what is incoherent and keeps pressing text-level argument before concluding mystery.",
      academic:
        "Epistemic humility and logical non-contradiction are compatible commitments. Methodologically, mystery claims should be constrained by prior exegetical work and consistency checks across related passages."
    },
    references: [
      {
        reference: "Deuteronomy 29:29 (KJV)",
        passage:
          "The secret things belong unto the LORD our God: but those things which are revealed belong unto us and to our children for ever, that we may do all the words of this law."
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
    title: "1 Corinthians 10:13 and the Could-Have-Done-Otherwise Test",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "Responsibility does not require alternative possibilities, so way-of-escape language does not challenge compatibilism.",
    tones: {
      pastoral:
        "This is a serious compatibilist point and should be engaged respectfully. The text still says God makes a way of escape so believers need not yield, which keeps real moral decision language in view.",
      debate:
        "If every sin-outcome is fixed in the same deterministic sense, 1 Corinthians 10:13's way-of-escape framing becomes hard to read as practical alternative. The burden is to show how this remains more than rhetorical duty language.",
      academic:
        "The verse's modal structure (not suffer... above that ye are able; but... make a way to escape) supports robust exhortational force. Compatibilist readings may preserve accountability, but must explain how alternative-avoidance discourse functions under exhaustive necessity claims."
    },
    references: [
      {
        reference: "1 Corinthians 10:13 (KJV)",
        passage:
          "There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a way to escape, that ye may be able to bear it."
      },
      {
        reference: "Hebrews 3:12 (KJV)",
        passage:
          "Take heed, brethren, lest there be in any of you an evil heart of unbelief, in departing from the living God."
      },
      {
        reference: "James 1:13 (KJV)",
        passage:
          "Let no man say when he is tempted, I am tempted of God: for God cannot be tempted with evil, neither tempteth he any man:"
      }
    ]
  },
  {
    title: "Internal Critique Should Use Defined Premises, Not Framing Assumptions",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "Your critique fails because it does not stay on our terms, so it can be rejected before premise-level engagement.",
    tones: {
      pastoral:
        "Fairness matters for both sides. The best path is to define terms clearly, restate each side in good faith, and then test the actual premises.",
      debate:
        "A framing objection is not yet a refutation. Internal critique requires engaging the opponent's stated premises and showing where the inference fails.",
      academic:
        "Methodologically, internal critique is premise-dependent and inferentially constrained. Prejudging by rhetorical framing risks question-filtering before argument evaluation."
    },
    references: [
      {
        reference: "Proverbs 18:13 (KJV)",
        passage:
          "He that answereth a matter before he heareth it, it is folly and shame unto him."
      },
      {
        reference: "Proverbs 18:17 (KJV)",
        passage:
          "He that is first in his own cause seemeth just; but his neighbour cometh and searcheth him."
      },
      {
        reference: "Acts 17:11 (KJV)",
        passage:
          "These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily, whether those things were so."
      }
    ]
  },
  {
    title: "Classical Theism by Definition Is Not a Full Rebuttal",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "Because classical theism says God cannot deceive, deception-based critiques are invalid by definition.",
    tones: {
      pastoral:
        "All orthodox believers affirm God is true and cannot lie. The remaining question is whether a specific determinist model preserves that confession coherently in how belief-formation is explained.",
      debate:
        "Appealing to classical theism can protect core doctrine, but it does not automatically answer model-level tensions. You still have to show where the argument's premises fail.",
      academic:
        "This is a potential question-begging move if definitional orthodoxy is used to bypass structural critique. The proper response is to identify the invalid premise or inference while preserving the non-deceptive divine attribute claim."
    },
    references: [
      {
        reference: "Titus 1:2 (KJV)",
        passage:
          "In hope of eternal life, which God, that cannot lie, promised before the world began;"
      },
      {
        reference: "Numbers 23:19 (KJV)",
        passage:
          "God is not a man, that he should lie; neither the son of man, that he should repent."
      },
      {
        reference: "1 Thessalonians 5:21 (KJV)",
        passage:
          "Prove all things; hold fast that which is good."
      }
    ]
  },
  {
    title: "Changing the Label Does Not Remove the Underlying Problem",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "If the term deception is too loaded, replacing it with softer wording dissolves the objection.",
    tones: {
      pastoral:
        "Word choice can affect tone and we should be careful. But changing a label does not change the underlying logic if the same structure and implications remain.",
      debate:
        "Renaming the problem is not solving the problem. If the model still entails indistinguishable determination of true and false doctrinal belief, the epistemic pressure is unchanged.",
      academic:
        "This is a semantic-substitution issue: lexical moderation does not alter entailment relations. The decisive question is model structure, not rhetorical intensity."
    },
    references: [
      {
        reference: "Isaiah 5:20 (KJV)",
        passage:
          "Woe unto them that call evil good, and good evil; that put darkness for light, and light for darkness; that put bitter for sweet, and sweet for bitter!"
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
    title: "Judicial Delusion Is Judgment After Truth-Rejection",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "Texts about God sending delusion prove exhaustive divine determination of false beliefs in general.",
    tones: {
      pastoral:
        "Scripture does describe judicial delusion, and that should be acknowledged honestly. The same texts present a sequence: people reject truth first, then delusion follows as judgment.",
      debate:
        "The key distinction is scope and order. 2 Thessalonians 2 says they refused to love the truth, then God sends delusion. That is not the same thesis as God determining every believer's theological errors from the start.",
      academic:
        "Judicial-delusion pericopes are context-bound acts of retributive hardening. Methodologically, they do not license a universal belief-formation model unless additional premises establish that transfer."
    },
    references: [
      {
        reference: "2 Thessalonians 2:9-12 (KJV)",
        passage:
          "Even him, whose coming is after the working of Satan with all power and signs and lying wonders, And with all deceivableness of unrighteousness in them that perish; because they received not the love of the truth, that they might be saved. And for this cause God shall send them strong delusion, that they should believe a lie: That they all might be damned who believed not the truth, but had pleasure in unrighteousness."
      },
      {
        reference: "Romans 1:21-25 (KJV)",
        passage:
          "Because that, when they knew God, they glorified him not as God, neither were thankful; but became vain in their imaginations, and their foolish heart was darkened. Professing themselves to be wise, they became fools... Wherefore God also gave them up to uncleanness through the lusts of their own hearts... Who changed the truth of God into a lie, and worshipped and served the creature more than the Creator."
      },
      {
        reference: "James 1:13 (KJV)",
        passage:
          "Let no man say when he is tempted, I am tempted of God: for God cannot be tempted with evil, neither tempteth he any man:"
      }
    ]
  },
  {
    title: "Ahab and the Lying Spirit Are Not a Global Belief Template",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "Because God permits deception in 1 Kings 22, exhaustive determination of all false theological belief is biblically established.",
    tones: {
      pastoral:
        "1 Kings 22 is a sobering judgment text and should be handled with reverence. It describes a specific judicial event against a hardened king, not a universal rule for every believer's doctrinal mistakes.",
      debate:
        "Ahab's case can support judicial hardening, but it does not automatically prove a comprehensive all-person/all-belief deterministic thesis. Narrative judgment episodes should not be stretched into a total metaphysical system without warrant.",
      academic:
        "The pericope presents prophetic courtroom imagery and targeted royal judgment. Exegetical transfer from local narrative function to universal doxastic determinism is a category expansion requiring explicit argument."
    },
    references: [
      {
        reference: "1 Kings 22:19-23 (KJV)",
        passage:
          "And he said, Hear thou therefore the word of the LORD: I saw the LORD sitting on his throne, and all the host of heaven standing by him... And there came forth a spirit, and stood before the LORD, and said, I will persuade him... I will go forth, and I will be a lying spirit in the mouth of all his prophets. And he said, Thou shalt persuade him, and prevail also: go forth, and do so."
      },
      {
        reference: "1 Kings 22:8 (KJV)",
        passage:
          "There is yet one man, Micaiah the son of Imlah, by whom we may enquire of the LORD: but I hate him; for he doth not prophesy good concerning me, but evil."
      },
      {
        reference: "1 Kings 22:18 (KJV)",
        passage:
          "Did I not tell thee that he would prophesy no good concerning me, but evil?"
      }
    ]
  },
  {
    title: "Tu Quoque Is Not a Direct Refutation",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "Your theology also has unresolved tensions, so this criticism of Calvinism can be dismissed.",
    tones: {
      pastoral:
        "It is fair to compare systems, and every side should accept scrutiny. Still, one argument should be answered on its own merits before moving to counter-accusations.",
      debate:
        "Pointing to another model's problems does not invalidate the current critique. That is at best a second discussion unless it directly defeats a premise here and now.",
      academic:
        "Tu quoque can expose inconsistency but does not by itself undercut an argument's validity or soundness. Rebuttal requires premise-denial, inference-failure, or defeater evidence specific to the target claim."
    },
    references: [
      {
        reference: "Proverbs 18:17 (KJV)",
        passage:
          "He that is first in his own cause seemeth just; but his neighbour cometh and searcheth him."
      },
      {
        reference: "1 Thessalonians 5:21 (KJV)",
        passage:
          "Prove all things; hold fast that which is good."
      },
      {
        reference: "2 Corinthians 10:5 (KJV)",
        passage:
          "Casting down imaginations, and every high thing that exalteth itself against the knowledge of God, and bringing into captivity every thought to the obedience of Christ;"
      }
    ]
  },
  {
    title: "Judicial Hardening Is Not Identical to Universal Total Inability",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "Judicial hardening language in Scripture simply restates the same universal inability all people already have from birth.",
    tones: {
      pastoral:
        "Scripture certainly teaches deep human sinfulness. It also presents hardening episodes with historical and redemptive timing language, which suggests more than a flat restatement of one condition.",
      debate:
        "If judicial hardening is functionally identical to total inability in every respect, many narrative and temporal markers lose force. Romans 11's in part and until language points to a specific hardening function in redemptive history.",
      academic:
        "Total inability and judicial hardening can overlap conceptually without being coextensive categories. Exegetically, hardening texts often include temporal, covenantal, and mission-related functions that resist strict identity claims."
    },
    references: [
      {
        reference: "Romans 11:7-8 (KJV)",
        passage:
          "What then? Israel hath not obtained that which he seeketh for; but the election hath obtained it, and the rest were blinded. (According as it is written, God hath given them the spirit of slumber, eyes that they should not see, and ears that they should not hear;) unto this day."
      },
      {
        reference: "Romans 11:25 (KJV)",
        passage:
          "For I would not, brethren, that ye should be ignorant of this mystery, lest ye should be wise in your own conceits; that blindness in part is happened to Israel, until the fulness of the Gentiles be come in."
      },
      {
        reference: "Romans 11:32 (KJV)",
        passage:
          "For God hath concluded them all in unbelief, that he might have mercy upon all."
      }
    ]
  },
  {
    title: "Parables as Judicial Hardening, Not Mere Theater",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "Parables only illustrate truth neutrally; they do not function in judicial hardening dynamics.",
    tones: {
      pastoral:
        "Jesus used parables to reveal and conceal, and that should be acknowledged carefully. This does not deny God's sovereignty; it highlights how judicial hardening can operate in history.",
      debate:
        "The text itself says seeing they may see, and not perceive and links this to forgiveness language. That is difficult to reduce to neutral illustration only.",
      academic:
        "Synoptic parable explanations and Isaiah 6 citation patterns indicate a dual function: revelatory for some, judicially concealing for others. The debate is mechanism and scope, not whether the hardening note exists."
    },
    references: [
      {
        reference: "Mark 4:11-12 (KJV)",
        passage:
          "And he said unto them, Unto you it is given to know the mystery of the kingdom of God: but unto them that are without, all these things are done in parables: That seeing they may see, and not perceive; and hearing they may hear, and not understand; lest at any time they should be converted, and their sins should be forgiven them."
      },
      {
        reference: "Matthew 13:13-15 (KJV)",
        passage:
          "Therefore speak I to them in parables: because they seeing see not; and hearing they hear not, neither do they understand. And in them is fulfilled the prophecy of Esaias, which saith, By hearing ye shall hear, and shall not understand; and seeing ye shall see, and shall not perceive: For this people's heart is waxed gross, and their ears are dull of hearing, and their eyes they have closed; lest at any time they should see with their eyes and hear with their ears, and should understand with their heart, and should be converted, and I should heal them."
      },
      {
        reference: "Isaiah 6:9-10 (KJV)",
        passage:
          "And he said, Go, and tell this people, Hear ye indeed, but understand not; and see ye indeed, but perceive not. Make the heart of this people fat, and make their ears heavy, and shut their eyes; lest they see with their eyes, and hear with their ears, and understand with their heart, and convert, and be healed."
      }
    ]
  },
  {
    title: "Foreknowledge Is Not The Same Claim as Causation",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "If God foreknows an event, that foreknowledge itself means God causally determines the event.",
    tones: {
      pastoral:
        "God's perfect foreknowledge should comfort believers. The philosophical question is whether knowing an act before it happens is identical to causally producing that act.",
      debate:
        "Foreknowledge and causation are not automatically interchangeable terms. Scripture can join foreknowledge and purpose without collapsing all distinctions between knowing, permitting, and directly causing.",
      academic:
        "The inference from epistemic certainty to efficient causation is a substantive metaphysical step, not a definitional truth. Exegesis and philosophical argument both are needed before equating the two."
    },
    references: [
      {
        reference: "Acts 2:23 (KJV)",
        passage:
          "Him, being delivered by the determinate counsel and foreknowledge of God, ye have taken, and by wicked hands have crucified and slain:"
      },
      {
        reference: "Romans 8:29 (KJV)",
        passage:
          "For whom he did foreknow, he also did predestinate to be conformed to the image of his Son."
      },
      {
        reference: "1 Peter 1:2 (KJV)",
        passage:
          "Elect according to the foreknowledge of God the Father, through sanctification of the Spirit, unto obedience and sprinkling of the blood of Jesus Christ."
      }
    ]
  },
  {
    title: "Unable to Save Self Is Not Identical to Unable to Respond to Revelation",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "Because sinners cannot save themselves, they also cannot meaningfully respond to God's revelation when confronted by it.",
    tones: {
      pastoral:
        "No one saves himself; salvation is by grace. Scripture still presents summons, hearing, and refusal language that treats response as meaningful and blameworthy.",
      debate:
        "Inability to self-atone is not the same proposition as inability to repent when confronted with divine truth. Category distinctions matter in evangelistic and warning texts.",
      academic:
        "Soteriological inability claims (self-redemption) should not be conflated with doxastic-volitional response categories under proclamation. Canonical data includes both grace primacy and accountable response discourse."
    },
    references: [
      {
        reference: "Romans 10:14-17 (KJV)",
        passage:
          "How then shall they call on him in whom they have not believed? and how shall they believe in him of whom they have not heard? and how shall they hear without a preacher? And how shall they preach, except they be sent? as it is written, How beautiful are the feet of them that preach the gospel of peace, and bring glad tidings of good things! But they have not all obeyed the gospel. For Esaias saith, Lord, who hath believed our report? So then faith cometh by hearing, and hearing by the word of God."
      },
      {
        reference: "Acts 17:30 (KJV)",
        passage:
          "And the times of this ignorance God winked at; but now commandeth all men every where to repent:"
      },
      {
        reference: "John 5:40 (KJV)",
        passage:
          "And ye will not come to me, that ye might have life."
      }
    ]
  },
  {
    title: "Infant Accountability and Reprobation Pressure",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "Unconditional election/reprobation creates no additional moral pressure regarding infants beyond ordinary human sinfulness.",
    tones: {
      pastoral:
        "This is a sensitive issue and should be handled with care and humility. Scripture gives less detail than many want, so dogmatism should be avoided while still asking hard coherence questions.",
      debate:
        "The concern is not sentimentality but moral-theological consistency: how fixed reprobation claims interact with texts about justice, little ones, and accountability categories.",
      academic:
        "Any systematic account must integrate doctrines of original sin, divine justice, and infant destiny with clear epistemic modesty where Scripture is less explicit. Pressure points here are coherence and warranted inference limits."
    },
    references: [
      {
        reference: "Deuteronomy 1:39 (KJV)",
        passage:
          "Moreover your little ones, which ye said should be a prey, and your children, which in that day had no knowledge between good and evil, they shall go in thither."
      },
      {
        reference: "2 Samuel 12:23 (KJV)",
        passage:
          "But now he is dead, wherefore should I fast? can I bring him back again? I shall go to him, but he shall not return to me."
      },
      {
        reference: "Genesis 18:25 (KJV)",
        passage:
          "That be far from thee to do after this manner, to slay the righteous with the wicked... Shall not the Judge of all the earth do right?"
      }
    ]
  }
];

const epistemicChallengeData = [
  {
    title: "Exhaustive Determinism and Epistemic Self-Defeat",
    claimLabel: "Argument",
    responseLabel: "Response",
    claim:
      "If God determines every theological conclusion, including false ones held by sincere believers, confidence in our own conclusions becomes unstable.",
    tones: {
      pastoral:
        "This concern is not saying God cannot guide his people. It is asking how believers can trust their theological judgments if every error and every judgment-step is equally determined by the same exhaustive decree.",
      debate:
        "If exhaustive determinism includes God determining believers into false theology, the model risks undercutting doctrinal confidence from inside. The challenge is not mere mystery but epistemic coherence.",
      academic:
        "The argument targets internal warrant conditions: when true and false theological beliefs are both exhaustively determined, a defeater pressure emerges against confidence that one has tracked truth rather than merely instantiated decree."
    },
    references: [
      {
        reference: "1 Timothy 2:4 (KJV)",
        passage:
          "Who will have all men to be saved, and to come unto the knowledge of the truth."
      },
      {
        reference: "John 8:32 (KJV)",
        passage:
          "And ye shall know the truth, and the truth shall make you free."
      },
      {
        reference: "1 John 1:5 (KJV)",
        passage:
          "God is light, and in him is no darkness at all."
      }
    ]
  },
  {
    title: "Trustworthiness Pressure Under Exhaustive False-Belief Determination",
    claimLabel: "Argument",
    responseLabel: "Response",
    claim:
      "If God determines all believers to hold at least some false theological beliefs, trust in theological conclusions faces an undercutting defeater.",
    tones: {
      pastoral:
        "This is not claiming God lies. It asks whether a model that equally determines true and false doctrinal conclusions can still give ordinary confidence that our current conclusions are truth-tracking.",
      debate:
        "The challenge is model-level trustworthiness: if all parties are determination-level outputs including false theology, confidence can become assertion without independent warrant.",
      academic:
        "The objection is an undercutting-defeater argument about doxastic justification. It targets epistemic position under exhaustive doxastic determination, not divine moral character directly."
    },
    references: [
      {
        reference: "Titus 1:2 (KJV)",
        passage:
          "In hope of eternal life, which God, that cannot lie, promised before the world began;"
      },
      {
        reference: "John 8:32 (KJV)",
        passage:
          "And ye shall know the truth, and the truth shall make you free."
      },
      {
        reference: "1 Thessalonians 5:21 (KJV)",
        passage:
          "Prove all things; hold fast that which is good."
      }
    ]
  },
  {
    title: "Circular Reliability Claims Need Independent Grounding",
    claimLabel: "Argument",
    responseLabel: "Response",
    claim:
      "A determinist cannot simply say, my reasoning is reliable because the determining cause made it reliable, without offering non-circular grounds.",
    tones: {
      pastoral:
        "Believers should test claims carefully, not assume reliability by bare assertion. Scripture calls us to examine and prove, which pushes us away from circular certainty claims.",
      debate:
        "Saying my reasoning is reliable because my system says it is reliable is question-begging. The challenge is to show independent warrant, especially amid peer-level disagreement.",
      academic:
        "The objection is a regress/circularity pressure on first-order doxastic confidence. Methodologically, reliability claims require warrant not reducible to the same contested inferential chain."
    },
    references: [
      {
        reference: "Acts 17:11 (KJV)",
        passage:
          "These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily, whether those things were so."
      },
      {
        reference: "1 Thessalonians 5:21 (KJV)",
        passage:
          "Prove all things; hold fast that which is good."
      },
      {
        reference: "Isaiah 1:18 (KJV)",
        passage:
          "Come now, and let us reason together, saith the LORD."
      }
    ]
  },
  {
    title: "Rebellion Language Becomes Strained Under Exhaustive Causation",
    claimLabel: "Argument",
    responseLabel: "Response",
    claim:
      "If sinful refusal is exhaustively determined in the same way as every other event, ordinary biblical rebellion language can appear semantically weakened.",
    tones: {
      pastoral:
        "Scripture presents both God's rule and real human refusal. Any model should preserve both truths without making calls to repent sound only formal.",
      debate:
        "The burden is to explain how ye would not and gainsaying language remain genuine rebellion if every contrary intention is antecedently fixed at the same exhaustive level.",
      academic:
        "This is a semantic-coherence challenge: rebellion and culpable refusal categories must remain robust in discourse where divine sovereignty is also affirmed."
    },
    references: [
      {
        reference: "Romans 10:21 (KJV)",
        passage:
          "All day long I have stretched forth my hands unto a disobedient and gainsaying people."
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
      }
    ]
  },
  {
    title: "Strongest-Desire Compatibilism and Truth-Tracking Rationality",
    claimLabel: "Argument",
    responseLabel: "Response",
    claim:
      "If belief-choice is reduced to strongest present desire, it is not obvious how reasoning remains a truth-tracking norm rather than desire-tracking output.",
    tones: {
      pastoral:
        "Scripture often calls us to reject self-trust and submit our thoughts to God's truth. That pattern fits active reasoning responsibility, not mere desire-following.",
      debate:
        "Desire can influence judgment, but it cannot be the whole account of rational normativity. Facts can require conclusions that run against our strongest immediate preference.",
      academic:
        "The objection distinguishes motivational psychology from epistemic normativity: desire-selection alone does not explain why a conclusion should count as rationally warranted."
    },
    references: [
      {
        reference: "Proverbs 28:26 (KJV)",
        passage:
          "He that trusteth in his own heart is a fool: but whoso walketh wisely, he shall be delivered."
      },
      {
        reference: "Jeremiah 17:9 (KJV)",
        passage:
          "The heart is deceitful above all things, and desperately wicked: who can know it?"
      },
      {
        reference: "2 Corinthians 10:5 (KJV)",
        passage:
          "Casting down imaginations, and every high thing that exalteth itself against the knowledge of God, and bringing into captivity every thought to the obedience of Christ;"
      }
    ]
  },
  {
    title: "Rejecting Exhaustive Determinism Is Not Rejecting Divine Action",
    claimLabel: "Argument",
    responseLabel: "Response",
    claim:
      "One can deny exhaustive determination of all reasoning while still affirming strong divine action, including Scripture inspiration and providential governance.",
    tones: {
      pastoral:
        "This is an important clarification: denying exhaustive divine determinism does not mean God is absent or weak. It means preserving both God's sovereignty and meaningful human responsibility.",
      debate:
        "The false dilemma is common: either exhaustive determinism or practical deism. Scripture affirms decisive divine acts without requiring a totalized determinist model for every human inference.",
      academic:
        "A non-exhaustive-determinist framework can still affirm robust providence and inspiration claims by distinguishing special divine acts from a universal causal-totality thesis."
    },
    references: [
      {
        reference: "2 Peter 1:21 (KJV)",
        passage:
          "For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost."
      },
      {
        reference: "2 Timothy 3:16 (KJV)",
        passage:
          "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness:"
      },
      {
        reference: "Luke 1:3-4 (KJV)",
        passage:
          "It seemed good to me also, having had perfect understanding of all things from the very first, to write unto thee in order, most excellent Theophilus, That thou mightest know the certainty of those things, wherein thou hast been instructed."
      }
    ]
  },
  {
    title: "Assurance and Temporary-Faith Pressure Under Fixed Election",
    claimLabel: "Argument",
    responseLabel: "Response",
    claim:
      "If assurance is tied to signs that can appear in non-elect hearers, confidence can become psychologically strong but epistemically unstable.",
    tones: {
      pastoral:
        "Believers should rest in Christ, not in panic. Even so, systems should explain how assurance remains meaningful when Scripture warns about temporary or non-enduring responses.",
      debate:
        "The issue is not whether Calvinists teach assurance; they do. The pressure point is whether assurance criteria can distinguish true perseverance from temporary confidence without circularity.",
      academic:
        "This challenge targets warrant conditions for assurance under fixed-election schemas: if phenomenology of faith can be mimicked by non-persevering cases, a principled non-circular discriminator is required."
    },
    references: [
      {
        reference: "Romans 8:29-30 (KJV)",
        passage:
          "For whom he did foreknow, he also did predestinate to be conformed to the image of his Son, that he might be the firstborn among many brethren. Moreover whom he did predestinate, them he also called: and whom he called, them he also justified: and whom he justified, them he also glorified."
      },
      {
        reference: "Hebrews 3:14 (KJV)",
        passage:
          "For we are made partakers of Christ, if we hold the beginning of our confidence stedfast unto the end."
      },
      {
        reference: "2 Peter 2:20-21 (KJV)",
        passage:
          "For if after they have escaped the pollutions of the world through the knowledge of the Lord and Saviour Jesus Christ, they are again entangled therein, and overcome, the latter end is worse with them than the beginning. For it had been better for them not to have known the way of righteousness, than, after they have known it, to turn from the holy commandment delivered unto them."
      }
    ]
  },
  {
    title: "Command Language and Agency Under Exhaustive Determination",
    claimLabel: "Argument",
    responseLabel: "Response",
    claim:
      "If all trust-and-obey outcomes are fixed at the same determination level, imperative language risks becoming descriptive rather than action-guiding.",
    tones: {
      pastoral:
        "God's commands are given to be obeyed, not merely observed. Any model should preserve the lived force of trust, repent, and believe as real summons.",
      debate:
        "Duty-not-ability distinctions may stand, but command language still has to function as practical address. If no alternative response is possible in any relevant sense, the force of exhortation is reduced.",
      academic:
        "The concern is speech-act integrity: biblical imperatives and rebukes appear to presuppose meaningful agency participation. Exhaustive deterministic readings must specify how directive force survives without collapsing into post hoc description."
    },
    references: [
      {
        reference: "Acts 17:30 (KJV)",
        passage:
          "And the times of this ignorance God winked at; but now commandeth all men every where to repent:"
      },
      {
        reference: "John 5:40 (KJV)",
        passage: "And ye will not come to me, that ye might have life."
      },
      {
        reference: "Hebrews 3:12 (KJV)",
        passage:
          "Take heed, brethren, lest there be in any of you an evil heart of unbelief, in departing from the living God."
      }
    ]
  }
];


const glossaryData = [
  {
    term: "Election",
    definition:
      "God's choosing language in Scripture. Key debates include individual and corporate dimensions, relation to foreknowledge, and how election language connects to faith and union with Christ.",
    references: ["Ephesians 1:4-5 (KJV)", "Romans 8:29-30 (KJV)"]
  },
  {
    term: "Corporate Election (In Christ)",
    definition:
      "A reading where Scripture describes the chosen people in Christ and their ordained destiny, while individuals enter that people through hearing and believing the gospel. Some theologians hold this with personal election rather than against it.",
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
      "God's prior knowledge in salvation discussions. Readings differ on whether foreknowledge emphasizes foreloving covenant choice, foreordaining intent, or relational knowing with response in view.",
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
      "The claim that God alone is the decisive effective cause of regeneration and saving response. Debates focus on how this relates to commands, invitations, and refusal language in Scripture.",
    references: ["John 6:44 (KJV)", "Acts 7:51 (KJV)"]
  },
  {
    term: "Synergism",
    definition:
      "The claim that salvation is by grace while still involving real human response enabled by grace. Advocates deny merit-causation; critics argue this can weaken grace-monergism depending on formulation.",
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
      "The claim that every event, including sinful intentions, unfolds according to an exhaustive divine decree. Debates center on compatibilism, providence, and divine holiness/culpability distinctions.",
    references: ["Romans 9:19-24 (KJV)", "James 1:13 (KJV)"]
  },
  {
    term: "Compatibilism",
    definition:
      "A model claiming divine determination and meaningful human responsibility are compatible. The key debate is whether commands, blame, and warnings retain full explanatory force under this model.",
    references: ["Romans 9:19-21 (KJV)", "John 5:40 (KJV)", "Romans 10:21 (KJV)"]
  },
  {
    term: "Concurrence",
    definition:
      "A doctrine that one event can involve both divine providential purpose and creaturely action. The question is whether this implies exhaustive determination of every creaturely intention.",
    references: ["Acts 4:27-28 (KJV)", "Acts 2:23 (KJV)", "Genesis 50:20 (KJV)"]
  },
  {
    term: "Definition Drift",
    definition:
      "Shifting meanings of terms like sovereignty, predestination, and determination mid-argument. Stable definitions are necessary before evaluating claims.",
    references: ["Proverbs 18:13 (KJV)", "Acts 17:11 (KJV)", "1 Thessalonians 5:21 (KJV)"]
  },
  {
    term: "Determination (Technical)",
    definition:
      "A technical claim that antecedent conditions are sufficient to necessitate an event. This is stronger than saying an event is merely foreknown or certain.",
    references: ["Acts 2:23 (KJV)", "Luke 22:22 (KJV)", "1 Corinthians 10:13 (KJV)"]
  },
  {
    term: "Certainty vs Necessity",
    definition:
      "Certainty means something will happen; necessity means it could not be otherwise. Debates often fail when these are treated as identical without argument.",
    references: ["Luke 22:22 (KJV)", "Acts 2:23 (KJV)", "1 Corinthians 10:13 (KJV)"]
  },
  {
    term: "Contingency",
    definition:
      "A contingent act is one that truly could be otherwise under the relevant conditions. Many command, warning, and way-of-escape texts are read as practical contingency language.",
    references: ["1 Corinthians 10:13 (KJV)", "Colossians 1:23 (KJV)", "Hebrews 3:12 (KJV)"]
  },
  {
    term: "Judicial Delusion",
    definition:
      "A judgment pattern where people first reject truth and are then given over to deeper deception. This is different from claiming God universally determines every person's false theological beliefs from the outset.",
    references: ["2 Thessalonians 2:9-12 (KJV)", "Romans 1:21-25 (KJV)", "1 Kings 22:19-23 (KJV)"]
  },
  {
    term: "Assurance Under Fixed Election",
    definition:
      "The pastoral and epistemic question of how believers distinguish true perseverance from temporary confidence when election is treated as fixed and hidden.",
    references: ["Romans 8:29-30 (KJV)", "Hebrews 3:14 (KJV)", "2 Peter 2:20-21 (KJV)"]
  },
  {
    term: "Lapsarian Ordering",
    definition:
      "An internal Calvinist debate over the logical order of God's decrees (for example, election, fall, and reprobation). It explains family differences inside Calvinism but does not settle exegesis by itself.",
    references: ["Romans 9:19-24 (KJV)", "1 Timothy 2:3-4 (KJV)", "James 1:13 (KJV)"]
  },
  {
    term: "Hermeneutics",
    definition:
      "The disciplined process of interpreting Scripture by context, genre, language, and argument-flow rather than surface phrasing alone.",
    references: ["2 Timothy 2:15 (KJV)", "Luke 24:27 (KJV)", "2 Peter 3:16 (KJV)"]
  },
  {
    term: "Ordain vs Determine",
    definition:
      "A distinction between God's sovereign ordaining of outcomes and the claim that God directly causes every intention and decision in the same deterministic manner.",
    references: ["Acts 2:23 (KJV)", "Genesis 50:20 (KJV)", "James 1:13 (KJV)"]
  },
  {
    term: "Maverick Molecules (Slogan)",
    definition:
      "A sovereignty slogan often used in debate. The key question is whether sovereignty requires exhaustive causal determinism or can include providential governance with real creaturely agency.",
    references: ["Psalm 115:3 (KJV)", "Daniel 4:35 (KJV)", "Proverbs 16:9 (KJV)"]
  },
  {
    term: "Totality Claim (System-First Risk)",
    definition:
      "Appealing to the whole Bible can be valid, but it becomes risky when used to avoid passage-level exegesis and concrete textual warrants.",
    references: ["Acts 17:11 (KJV)", "1 Thessalonians 5:21 (KJV)", "Isaiah 28:10 (KJV)"]
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
          "The distinction may be theologically coherent, but these passages still need local contextual indicators before refusal is assigned only to a non-saving layer.",
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
    title: "Prayer, Conflation, and Modal Clarity",
    steps: [
      {
        layer: "Layer 1",
        objection:
          "If you pray for someone to repent, you are effectively praying for God to save them, so repentance and salvation are one collapsed category.",
        calvinistReply:
          "Prayer for repentance implies God must be decisive in both repentance and salvation outcomes.",
        counterResponse:
          "Prayer and category clarity can coexist: repentance is commanded to all, while salvation is granted through Christ to believers. Distinguishing those claims is not Pelagianism; it is basic biblical precision.",
        references: ["Acts 17:30 (KJV)", "Acts 16:31 (KJV)", "Acts 11:14 (KJV)"]
      },
      {
        layer: "Layer 2",
        objection:
          "Because believers pray for conversion, prayer itself proves irresistible causation.",
        calvinistReply:
          "Intercession only makes sense if God unilaterally determines who will convert.",
        counterResponse:
          "Intercession shows dependence on God, not necessarily a full deterministic model. The New Testament joins prayer with proclamation, open doors, and accountable hearing.",
        references: ["1 Timothy 2:1-6 (KJV)", "Romans 10:1 (KJV)", "Colossians 4:3 (KJV)"]
      },
      {
        layer: "Layer 3",
        objection:
          "If God infallibly knows what will happen, it must happen in a necessitated causal sense.",
        calvinistReply:
          "Divine certainty and event necessity are practically identical in outcome.",
        counterResponse:
          "Outcome certainty is not automatically the same proposition as causal necessity. Scripture can pair determined redemptive events with real woe/blame language and way-of-escape exhortation.",
        references: ["Luke 22:22 (KJV)", "Acts 2:23 (KJV)", "1 Corinthians 10:13 (KJV)"]
      }
    ]
  },
  {
    title: "Omni-Attributes and Irresistible Grace",
    steps: [
      {
        layer: "Layer 1",
        objection:
          "If grace is irresistible for every person God wills to save, then no one God salvifically wills to save can finally be lost.",
        calvinistReply:
          "God's decretive will infallibly saves the elect while his revealed will can address all in command-form without identical salvific intent.",
        counterResponse:
          "That distinction can be argued, but it must still account for broad salvation-desire and command language without reducing it to non-operative rhetoric.",
        references: ["1 Timothy 2:3-4 (KJV)", "Acts 17:30 (KJV)", "2 Peter 3:9 (KJV)"]
      },
      {
        layer: "Layer 2",
        objection:
          "If God is all-good, all-powerful, and all-knowing, why does a strict irresistible-grace model not result in all being saved?",
        calvinistReply:
          "God is not obligated to save all; justice and mercy are displayed differently according to his sovereign freedom.",
        counterResponse:
          "Divine freedom is biblical, yet the model still must preserve God's stated delight in repentance and broad invitation language as meaningful disclosures of character.",
        references: ["Ezekiel 18:23 (KJV)", "Matthew 23:37 (KJV)", "1 John 4:8 (KJV)"]
      },
      {
        layer: "Layer 3",
        objection:
          "If believers can hold false theology under exhaustive determination, how are they to trust which conclusions are true?",
        calvinistReply:
          "God ordinarily uses means, teachers, and sanctification processes to bring the elect toward truth over time.",
        counterResponse:
          "Means language helps pastorally, but the epistemic pressure remains if true and false doctrinal conclusions are equally determination-level outputs. Independent warrant structure still needs explicit account.",
        references: ["Acts 17:11 (KJV)", "1 Thessalonians 5:21 (KJV)", "John 8:32 (KJV)"]
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
  },
  {
    title: "Mystery vs Contradiction Triage",
    steps: [
      {
        layer: "Layer 1",
        objection:
          "Sovereignty and responsibility are both biblical, so any tension should simply be labeled mystery.",
        calvinistReply:
          "Finite minds cannot resolve all divine truths, so pressing for full explanatory coherence is misplaced.",
        counterResponse:
          "Humility is right, but triage matters: first test definitions and local context; only then appeal to mystery where Scripture leaves the mechanism unrevealed.",
        references: ["Deuteronomy 29:29 (KJV)", "Acts 17:11 (KJV)", "1 Thessalonians 5:21 (KJV)"]
      },
      {
        layer: "Layer 2",
        objection:
          "If a contradiction appears, creatures must submit and stop analysis.",
        calvinistReply:
          "Who are you, O man? The creature is not entitled to demand logical reconciliation.",
        counterResponse:
          "Romans 9 rebukes arrogance, not disciplined exegesis. Scripture itself commands proving, reasoning, and comparing texts while remaining reverent.",
        references: ["Romans 9:20-21 (KJV)", "Isaiah 1:18 (KJV)", "1 Thessalonians 5:21 (KJV)"]
      },
      {
        layer: "Layer 3",
        objection:
          "Practical rule: mystery should settle disputes early to preserve worship.",
        calvinistReply:
          "Extended logical probing risks rationalism and can harden hearts against revelation.",
        counterResponse:
          "A better rule is: do not force full mechanism where text is silent, but do reject semantic collapse and direct contradiction where text gives real explanatory language like wherefore and ye would not.",
        references: ["Romans 9:30-32 (KJV)", "John 5:40 (KJV)", "Romans 10:21 (KJV)"]
      }
    ]
  }
];

const tulipDeterminismSlopeData = [
  {
    title: "Step Chain: Conditional Determinism Stress Test for TULIP",
    steps: [
      {
        layer: "Step 1 - Total Inability (T)",
        objection:
          "If all non-regenerate hearers are unable to respond in any saving sense, universal calls become duty-statements without ordinary response capacity.",
        reply:
          "Possible Determinist Inference: unbelief outcomes are fixed at the inability level before the command is heard.",
        counterResponse:
          "KJV commands and rebukes still address hearers as responsible responders. Reformed duty-not-ability claims can be granted, but the summons must still retain practical force.",
        references: ["Acts 17:30 (KJV)", "John 5:40 (KJV)"]
      },
      {
        layer: "Step 2 - Unconditional Election + Limited Atonement (U/L)",
        objection:
          "If election is fixed for individuals and atonement intent is limited to that same set, the beneficiary group is closed prior to faith-response texts.",
        reply:
          "Possible Determinist Inference: salvation outcomes are settled before gospel encounter for each person.",
        counterResponse:
          "KJV passages still use broad-scope language and open proclamation forms. Group-election language does not by itself settle each individual conversion-mechanism claim. Strong Calvinist formulations can be stated cleanly, but narrowing claims must be shown text by text, not presumed globally.",
        references: ["Ephesians 1:4-5 (KJV)", "1 Timothy 2:3-4 (KJV)", "1 John 2:2 (KJV)"]
      },
      {
        layer: "Step 3 - Irresistible Grace (I)",
        objection:
          "If the inward call is always effectual for the elect, rejection language is treated as only external resistance and never final resistance to saving grace.",
        reply:
          "Possible Determinist Inference: the decisive conversion moment is unilateral and fixed for the elect alone.",
        counterResponse:
          "KJV resistance texts are direct and concrete. The outward/inward distinction may be coherent, but it should be anchored in contextual signals where resistance language appears.",
        references: ["Acts 7:51 (KJV)", "Matthew 23:37 (KJV)"]
      },
      {
        layer: "Step 4 - Perseverance Lock (P)",
        objection:
          "If all true believers must infallibly persevere, warning passages are reduced to means language rather than real contingency.",
        reply:
          "Possible Determinist Inference: future faithfulness outcomes are fixed, so warnings function as instruments only.",
        counterResponse:
          "KJV warning texts read as practical conditions addressed to real communities. Means-language can be retained, but conditional warnings still need to function as genuine pastoral caution.",
        references: ["Hebrews 3:14 (KJV)", "Romans 11:22 (KJV)", "Colossians 1:22-23 (KJV)"]
      },
      {
        layer: "Step 5 - Endpoint Test: Determinism vs Moral Coherence",
        objection:
          "When TULIP claims are maximized, many conclude all decisive salvation outcomes were fixed for individuals regardless of proclaimed invitation language.",
        reply:
          "Strong Compatibilist Inference: divine determination and real human willing are compatible, so commands and blame remain meaningful under providence.",
        counterResponse:
          "That is the strongest Reformed answer and should be engaged directly. This is a conditional stress test, not an inevitability claim, and compatibilism may pass it. Operational checks are explicit: Summons check (universal imperatives promise life on response without hidden audience qualifiers in the address), Blame check (wherefore/ye would not clauses function as explanatory reasons, not decree labels), Warning check (if/otherwise warnings to addressed communities retain practical contingency), and Modal check (will happen language is not silently converted into must happen necessity claims). If all four remain robust, the slope claim fails; only if they collapse into description-only language is determinist drift indicated.",
        references: ["Acts 17:30 (KJV)", "John 5:40 (KJV)", "Hebrews 3:14 (KJV)", "Acts 2:23 (KJV)"]
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
  "Acts 3": "Acts 3 records Peter's post-Pentecost call to repentance and includes times of refreshing/restitution language tied to prophetic expectation.",
  "Acts 4": "Acts 4 records the apostolic prayer after persecution and states that Christ's crucifixion occurred according to God's determined counsel while naming responsible human actors.",
  "Amos 9": "Amos 9 closes with restoration language about Israel's return, rebuilding, and secure planting in the land.",
  "Colossians 1": "Colossians 1 emphasizes Christ's supremacy and reconciliation with conditional continuation language in verse 23.",
  "Deuteronomy 28": "Deuteronomy 28 details covenant blessings and curses, including dispersion warnings for disobedience.",
  "Deuteronomy 30": "Deuteronomy 30 presents post-exile restoration language, including regathering and return to the fathers' land.",
  "Deuteronomy 1": "Deuteronomy 1 recounts wilderness judgment and includes little-ones accountability language in Israel's generation shift.",
  "Ephesians 1": "Ephesians 1 centers blessings in Christ and includes hearing and believing language as part of participation.",
  "Ephesians 2": "Ephesians 2 highlights salvation by grace through faith and transformation from prior spiritual death.",
  "Ezekiel 40": "Ezekiel 40 begins the temple-vision sequence in explicit land-of-Israel framing.",
  "Ezekiel 43": "Ezekiel 43 includes throne/dwelling language and temple-order instructions tied to Israel.",
  "Galatians 3": "Galatians 3 emphasizes justification by faith and unity in Christ while discussing Abrahamic promise themes.",
  "Galatians 6": "Galatians 6 closes with blessing language that includes the phrase Israel of God.",
  "Genesis 50": "Genesis 50 frames Joseph's suffering within creaturely evil intent and God's overriding good purpose.",
  "Habakkuk 1": "Habakkuk 1 includes holiness language and the prophet's complaint over judgment and violence.",
  "Genesis 17": "Genesis 17 presents covenant sign language and promises to Abraham and his seed, including the land promise.",
  "Genesis 18": "Genesis 18 includes Abraham's intercession and the Judge of all the earth do right declaration on divine justice.",
  "Genesis 25": "Genesis 25 includes the twins oracle about two nations and the elder-younger service statement later cited in Romans 9.",
  "Genesis 33": "Genesis 33 narrates Jacob-Esau reconciliation and unexpected mercy language in their meeting.",
  "Hebrews 10": "Hebrews 10 emphasizes Christ's once-for-all offering and its decisive sufficiency.",
  "Hebrews 11": "Hebrews 11 recounts faith-history themes, including patriarchal promise and homeland language.",
  "Hebrews 2": "Hebrews 2 stresses Christ's incarnational suffering and broad language around tasting death for every man.",
  "Hebrews 3": "Hebrews 3 combines exhortation with warning and continuation language aimed at covenant community perseverance.",
  "Hebrews 6": "Hebrews 6 contains one of the strongest warning passages concerning falling away after profound participation.",
  "Hebrews 8": "Hebrews 8 cites Jeremiah's New Covenant terms, including explicit mention of Israel and Judah.",
  "Isaiah 55": "Isaiah 55 is an invitation chapter calling hearers to seek the LORD, forsake wickedness, and come freely.",
  "Isaiah 6": "Isaiah 6 contains the prophet's commission and hardening-language later cited in Gospel parable contexts.",
  "Isaiah 5": "Isaiah 5 includes covenant lawsuit themes, moral inversion warnings, and a series of woes against corruption.",
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
  "Mark 4": "Mark 4 includes Jesus' parable teaching and the mystery-given/without-concealment explanation.",
  "Matthew 13": "Matthew 13 develops kingdom parables and explicitly applies Isaiah hardening language to hearers.",
  "Matthew 19": "Matthew 19 includes Jesus' promise of future judging over the twelve tribes of Israel.",
  "Matthew 24": "Matthew 24 contains Jesus' Olivet discourse, including generation language and tribulation markers.",
  "Matthew 23": "Matthew 23 combines prophetic rebuke with Jesus' lament over Jerusalem's refusal.",
  "Micah 4": "Micah 4 parallels Zion-and-nations restoration language and future peace motifs.",
  "Malachi 1": "Malachi 1 contrasts Jacob and Esau/Edom in covenant-judgment language that Paul later cites in Romans 9.",
  "Numbers 23": "Numbers 23 records Balaam oracles and includes direct statements on God's truthfulness and unchangeable fidelity.",
  "Philippians 1": "Philippians 1 combines thanksgiving, gospel partnership, and confidence language about God's ongoing work in believers.",
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
  "2 Samuel 12": "2 Samuel 12 narrates David's repentance and his statement of hope concerning his deceased child.",
  "2 Timothy 2": "2 Timothy 2 includes vessel imagery with cleansing language and readiness for honorable use.",
  "2 Peter 2": "2 Peter 2 warns of apostasy and worsening condition after escaping prior corruption.",
  "2 Peter 3": "2 Peter 3 discusses patience, repentance, and the coming day of the Lord.",
  "Titus 1": "Titus 1 opens with gospel mission framing and includes God's cannot-lie declaration tied to promise.",
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