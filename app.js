const toneProfiles = {
  pastoral: {
    label: "Pastoral",
    subtitle:
      "A gentle but direct biblical and logical challenge to Calvinist doctrine, using KJV references.",
    description:
      "Pastoral mode aims to be clear, charitable, and spiritually constructive while still naming contradictions.",
    intro:
      "This study tool is for believers who want to test doctrine carefully without unnecessary hostility. It organizes major concerns with Calvinism by showing how key claims can conflict with plain KJV readings and moral coherence.",
    logicSummary: [
      "If people are condemned for unbelief, invitations to believe appear to assume real responsibility and real opportunity.",
      "If Christ is presented as a provision for the world, readers naturally expect the gospel offer to be genuinely broad.",
      "If Scripture gives severe warnings, disciples are expected to treat those warnings as meaningful and urgent."
    ]
  },
  debate: {
    label: "Debate",
    subtitle:
      "A focused case that Calvinist claims fail under textual pressure and internal logical testing.",
    description:
      "Debate mode is concise and confronts doctrinal inconsistencies directly.",
    intro:
      "This framework isolates high-impact contradictions in Calvinism and tests them against direct KJV statements. The goal is a falsifiable biblical and logical case.",
    logicSummary: [
      "Commands to all lose force if most hearers are divinely unable to comply.",
      "Universal atonement language is strained when redefined to exclude most of humanity.",
      "Apostasy warnings are downgraded into hypotheticals if final falling is impossible."
    ]
  },
  academic: {
    label: "Academic",
    subtitle:
      "A structured doctrinal critique of Calvinism using exegetical scope and coherence analysis.",
    description:
      "Academic mode emphasizes interpretive method, lexical scope, and system-level consistency.",
    intro:
      "This tool presents an analytical critique of core Calvinist propositions by comparing them with straightforward KJV textual phenomena: universal imperatives, universal atonement language, resistance motifs, and apostasy warnings.",
    logicSummary: [
      "Moral accountability language normally presupposes meaningful agency relative to commanded response.",
      "Scope terms such as world and every man require strong contextual warrants before being reduced to subgroup meanings.",
      "Warning discourse functions performatively; treating warnings as merely formal weakens their pragmatic intent."
    ]
  }
};

const argumentsData = [
  {
    title: "Total Inability vs God's Universal Call",
    tones: {
      pastoral: {
        claim:
          "Calvinism says the non-elect cannot respond savingly, yet Scripture repeatedly extends broad calls to repent and come.",
        logic:
          "A universal invitation sounds sincere when hearers are addressed as responsible responders, not as people excluded by prior inability."
      },
      debate: {
        claim:
          "Total inability clashes with global repentance commands that target all hearers as if response is expected.",
        logic:
          "If inability is absolute for most people, universal commands become declarations of guilt without a real path to compliance."
      },
      academic: {
        claim:
          "The Calvinist inability thesis is difficult to reconcile with the breadth of universal imperative language in evangelistic texts.",
        logic:
          "Imperative universality normally implies audience-level accountability grounded in meaningful response capacity."
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
          "Unconditional election is often presented as gracious mystery, but it can seem to conflict with scriptures describing God's impartial heart toward humanity.",
        logic:
          "If God truly wills all to repentance, a fixed pre-temporal exclusion of many appears difficult to harmonize with that revealed will."
      },
      debate: {
        claim:
          "Unconditional election collides with explicit declarations that God is not partial and desires all to repentance.",
        logic:
          "A selective salvific decree for only some contradicts universal salvific desire language on its face."
      },
      academic: {
        claim:
          "The doctrine of unconditional election faces tension with texts asserting divine non-partiality and broad salvific intent.",
        logic:
          "Without a robust two-wills framework, the system appears to place decretal selectivity against declared universal intent."
      }
    },
    references: [
      {
        reference: "Romans 2:11 (KJV)",
        passage: "For there is no respect of persons with God."
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
      "God unconditionally chooses individuals for mercy or hardening irrespective of human response.",
    tones: {
      pastoral:
        "Romans 9 should be read with Romans 10 and 11. Paul still calls people to believe, grieves over unbelief, and explains Israel's condition in relation to faith and unbelief, not bare fatalism.",
      debate:
        "Romans 9 is not a stand-alone deterministic manifesto. Paul explicitly says Israel failed because they sought righteousness not by faith (Romans 9:30-32), which reintroduces response as a live category.",
      academic:
        "A contextual reading situates Romans 9 within the 9-11 discourse on covenant membership, historical roles, and faith-response dynamics. Romans 9:30-32 constrains deterministic readings by foregrounding faith versus works."
    },
    references: [
      {
        reference: "Romans 9:14-16 (KJV)",
        passage:
          "What shall we say then? Is there unrighteousness with God? God forbid. For he saith to Moses, I will have mercy on whom I will have mercy, and I will have compassion on whom I will have compassion. So then it is not of him that willeth, nor of him that runneth, but of God that sheweth mercy."
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
        "John 6 highlights the necessity of divine drawing, but it does not erase human responsibility. The same Gospel presents Jesus inviting all and rebuking refusal.",
      debate:
        "Appealing to John 6 alone ignores John-wide universal invitation language. If John 12:32 says Christ draws all men, drawing cannot mean elect-only coercion.",
      academic:
        "John 6 affirms divine initiative, yet Johannine intertexts (John 5:40; 12:32) complicate a strictly particularistic and irresistible construal of drawing."
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
        "Ephesians 1 celebrates God's saving plan in Christ and the blessings believers now enjoy in him. The chapter also ties participation to hearing and believing the gospel.",
      debate:
        "Ephesians 1 describes the destiny of those in Christ, not an abstract decree with no reference to gospel faith. Verse 13 links inclusion to hearing and believing.",
      academic:
        "The controlling phrase in Christ suggests a corporate-Christocentric election framework. Ephesians 1:13 introduces temporal appropriation through hearing and belief."
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
      "This verse proves a fixed decree of who will believe and who will not.",
    tones: {
      pastoral:
        "Acts 13 records Gentiles receiving the word with joy while others reject it. The narrative context still includes genuine proclamation and accountability.",
      debate:
        "One verse cannot erase the repeated New Testament pattern of universal summons, warnings, and blame for unbelief.",
      academic:
        "The lexical and narrative discussion around ordained should be evaluated in immediate context and canonical balance rather than imported as a totalizing deterministic key."
    },
    references: [
      {
        reference: "Acts 13:46-48 (KJV)",
        passage:
          "Then Paul and Barnabas waxed bold, and said, It was necessary that the word of God should first have been spoken to you: but seeing ye put it from you, and judge yourselves unworthy of everlasting life, lo, we turn to the Gentiles. For so hath the Lord commanded us, saying, I have set thee to be a light of the Gentiles, that thou shouldest be for salvation unto the ends of the earth. And when the Gentiles heard this, they were glad, and glorified the word of the Lord: and as many as were ordained to eternal life believed."
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
        "Romans 8 gives deep comfort to believers, but comforting assurance does not require denying the many warning texts that call believers to continue.",
      debate:
        "Using Romans 8 as a system lock ignores conditional perseverance language elsewhere in the New Testament.",
      academic:
        "Romans 8:29-30 should be read as assurance discourse for the faithful, not necessarily as a full metaphysical map that nullifies every conditional warning passage."
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
    title: "God has two wills, so no contradiction exists",
    claimLabel: "Calvinist Reply",
    responseLabel: "Counter-Response",
    claim:
      "God can command all to repent while decreeing only some will receive saving grace.",
    tones: {
      pastoral:
        "There may be mystery in God's ways, but Scripture's revealed invitations and warnings should still be taken with their full plain force.",
      debate:
        "Appealing to two wills can become a catch-all escape hatch that avoids hard contradictions rather than solving them.",
      academic:
        "The two-wills distinction is a serious theological proposal, yet it must still account for the pragmatic sincerity of universal commands and invitations in public proclamation texts."
    },
    references: [
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

const glossaryData = [
  {
    term: "Election",
    definition:
      "God's choosing language in Scripture. The key debate is whether election is strictly unconditional for individuals or Christ-centered and connected to faith response.",
    references: ["Ephesians 1:4-5 (KJV)", "Romans 8:29-30 (KJV)"]
  },
  {
    term: "Foreknowledge",
    definition:
      "God's prior knowledge in salvation discussions. Calvinist and non-Calvinist readings differ on whether foreknowledge means foreloving decree or relational knowing with response in view.",
    references: ["Romans 8:29-30 (KJV)", "1 Peter 1:2 (KJV)"]
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
          "If the command is universal and refusal is blamed, the plain force suggests more than a merely formal duty statement.",
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
          "That distinction can preserve system logic, but many readers see unresolved tension with plain universal language.",
        references: ["John 3:16 (KJV)", "1 Timothy 2:3-4 (KJV)"]
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
  }
];

const chapterContextNotes = {
  "Acts 13": "Acts 13 narrates Jew-Gentile response contrast: some reject the word, Gentiles rejoice, and mission extends outward.",
  "Acts 16": "Acts 16 contains direct salvation proclamation language: Believe on the Lord Jesus Christ.",
  "Acts 17": "Acts 17 presents a public universal repentance command in the context of creation, judgment, and resurrection proclamation.",
  "Colossians 1": "Colossians 1 emphasizes Christ's supremacy and reconciliation with conditional continuation language in verse 23.",
  "Ephesians 1": "Ephesians 1 centers blessings in Christ and includes hearing and believing language as part of participation.",
  "Ephesians 2": "Ephesians 2 highlights salvation by grace through faith and transformation from prior spiritual death.",
  "Hebrews 2": "Hebrews 2 stresses Christ's incarnational suffering and broad language around tasting death for every man.",
  "Hebrews 3": "Hebrews 3 combines exhortation with warning and continuation language aimed at covenant community perseverance.",
  "Hebrews 6": "Hebrews 6 contains one of the strongest warning passages concerning falling away after profound participation.",
  "Isaiah 55": "Isaiah 55 is an invitation chapter calling hearers to seek the LORD, forsake wickedness, and come freely.",
  "John 1": "John 1 presents Christ's coming, human response, and receiving-believing language tied to becoming children of God.",
  "John 3": "John 3 includes new birth discourse and broad gospel proclamation with whosoever-believeth language.",
  "John 5": "John 5 presents Jesus' authority claims and direct rebuke: people refuse to come for life.",
  "John 6": "John 6 features Bread of Life teaching, drawing language, and tensions around belief and unbelief.",
  "John 10": "John 10 uses shepherd imagery to distinguish followers and emphasizes hearing the Shepherd's voice.",
  "John 12": "John 12 ties Jesus' lifting up to drawing all men and transitions toward the passion narrative.",
  "John 15": "John 15 uses vine-branch imagery with abiding and non-abiding consequences.",
  "Luke 15": "Luke 15's parables of lostness and recovery frame dead/alive language in restoration context.",
  "Matthew 23": "Matthew 23 combines prophetic rebuke with Jesus' lament over Jerusalem's refusal.",
  "Revelation 22": "Revelation 22 closes with open invitation language: whosoever will may take the water of life freely.",
  "Romans 2": "Romans 2 emphasizes impartial judgment principles and moral accountability before God.",
  "Romans 8": "Romans 8 provides assurance themes for believers and a theological sequence involving foreknowledge and predestination.",
  "Romans 9": "Romans 9 addresses divine mercy, Israel, and election themes that continue into Romans 10 and 11.",
  "Romans 10": "Romans 10 stresses faith, confession, proclamation, and whosoever salvation language.",
  "Romans 11": "Romans 11 includes warning language about continuing in God's goodness and not being cut off.",
  "1 Corinthians 10": "1 Corinthians 10 warns believers from Israel's examples and exhorts vigilance against falling.",
  "1 Peter 1": "1 Peter 1 links foreknowledge language with sanctification, obedience, and redemptive identity.",
  "1 John 2": "1 John 2 includes Christ as propitiation language and broad scope wording about the whole world.",
  "1 Thessalonians 5": "1 Thessalonians 5 calls believers to discernment: prove all things; hold fast what is good.",
  "1 Timothy 2": "1 Timothy 2 combines intercession for all kinds of people with God's saving desire statements.",
  "2 Peter 2": "2 Peter 2 warns of apostasy and worsening condition after escaping prior corruption.",
  "2 Peter 3": "2 Peter 3 discusses patience, repentance, and the coming day of the Lord."
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
  }
];

const toneSelect = document.querySelector("#tone-select");
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
const glossaryList = document.querySelector("#glossary-list");
const drilldownList = document.querySelector("#drilldown-list");
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
let currentContextReference = contextReferencePool[0]?.reference || "";
let currentView = "study";
const chapterCache = new Map();
let contextRenderToken = 0;

toneSelect.value = currentTone;

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
    ...lensVerses
  ];

  const fromGlossary = glossaryData.map((entry) => entry.references).flat();
  const fromDrilldown = objectionDrilldownData
    .flatMap((entry) => entry.steps)
    .flatMap((step) => step.references);

  const allReferenceStrings = [
    ...withPassages.map((entry) => entry.reference),
    ...fromGlossary,
    ...fromDrilldown
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
  contextViewerSection.scrollIntoView({ behavior: "smooth", block: "start" });
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

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    body.hidden = expanded;
    symbol.textContent = expanded ? "+" : "-";
  });
}

function setView(viewName) {
  currentView = viewName;
  const showStudy = viewName === "study";

  studyView.hidden = !showStudy;
  compareView.hidden = showStudy;

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

function matchesDrilldownEntry(entry, toneKey) {
  return hasSearchMatch([
    entry.title,
    ...entry.steps.flatMap((step) => [
      step.layer,
      step.objection,
      step.calvinistReply,
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
  setHighlightedText(subtitle, profile.subtitle);
  setHighlightedText(toneDescription, profile.description);
  setHighlightedText(introCopy, profile.intro);
}

function renderArguments(toneKey) {
  argumentList.innerHTML = "";

  const entries = argumentsData.filter((entry) => matchesArgument(entry, toneKey));

  if (!entries.length) {
    renderEmptyState(argumentList, "No core challenges matched your search.");
    return;
  }

  entries.forEach((entry) => {
    const node = argumentTemplate.content.cloneNode(true);
    const article = node.querySelector(".argument-item");

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
}

function renderClaimResponseList(container, entries, toneKey, emptyMessage) {
  container.innerHTML = "";

  const filteredEntries = entries.filter((entry) => matchesClaimResponseEntry(entry, toneKey));

  if (!filteredEntries.length) {
    renderEmptyState(container, emptyMessage);
    return;
  }

  filteredEntries.forEach((entry) => {
    const node = proofTemplate.content.cloneNode(true);
    const article = node.querySelector(".argument-item");

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
}

function renderGlossary() {
  glossaryList.innerHTML = "";
  const entries = glossaryData.filter((entry) => matchesGlossaryEntry(entry));

  if (!entries.length) {
    renderEmptyState(glossaryList, "No glossary terms matched your search.");
    return;
  }

  entries.forEach((entry) => {
    const node = glossaryTemplate.content.cloneNode(true);
    const article = node.querySelector(".argument-item");

    setHighlightedText(article.querySelector(".argument-title"), entry.term);
    setHighlightedText(article.querySelector(".glossary-definition"), entry.definition);

    const referenceList = article.querySelector(".reference-list");
    entry.references.forEach((reference) => {
      referenceList.appendChild(createPassageDetail(reference, lookupPassage(reference)));
    });

    attachAccordionBehavior(article);
    glossaryList.appendChild(node);
  });
}

function renderDrilldown(toneKey) {
  drilldownList.innerHTML = "";
  const entries = objectionDrilldownData.filter((entry) => matchesDrilldownEntry(entry, toneKey));

  if (!entries.length) {
    renderEmptyState(drilldownList, "No objection drilldown entries matched your search.");
    return;
  }

  entries.forEach((entry) => {
    const node = drilldownTemplate.content.cloneNode(true);
    const article = node.querySelector(".argument-item");
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
      replyLabel.textContent = "Calvinist Reply";
      const replyText = document.createElement("p");
      setHighlightedText(replyText, step.calvinistReply);

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
    drilldownList.appendChild(node);
  });
}

async function renderContextViewer() {
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
  selectedWrap.className = "context-note";
  const selectedTitle = document.createElement("h3");
  setHighlightedText(selectedTitle, `Selected Reference: ${selected.reference}`);
  selectedWrap.append(selectedTitle, createPassageDetail(selected.reference, selected.passage, false));

  const noteWrap = document.createElement("div");
  noteWrap.className = "context-note";
  const noteTitle = document.createElement("h3");
  setHighlightedText(noteTitle, `Chapter Context: ${chapterKey}`);
  const noteText = document.createElement("p");
  setHighlightedText(noteText, contextNote);
  noteWrap.append(noteTitle, noteText);

  const relatedWrap = document.createElement("div");
  relatedWrap.className = "related-refs";
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
  chapterWrap.className = "chapter-view";
  const chapterTitle = document.createElement("h3");
  setHighlightedText(chapterTitle, `Full KJV Chapter Text: ${chapterKey}`);
  const chapterContent = document.createElement("div");
  chapterContent.className = "chapter-content";
  chapterContent.textContent = "Loading full chapter text...";
  chapterWrap.append(chapterTitle, chapterContent);

  contextOutput.append(selectedWrap, noteWrap, relatedWrap, chapterWrap);

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
  }
}

function renderLogicSummary(toneKey) {
  logicList.innerHTML = "";
  toneProfiles[toneKey].logicSummary.forEach((line) => {
    const item = document.createElement("li");
    setHighlightedText(item, line);
    logicList.appendChild(item);
  });
}

function renderFilters() {
  filtersContainer.innerHTML = "";

  const categories = ["All", ...new Set(lensVerses.map((item) => item.category))];

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
  comparisonFilters.innerHTML = "";
  const categories = ["All", "Core Challenge", "Proof-Text", "Common Reply", "Objection Drilldown"];

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
  verseCards.innerHTML = "";

  const subset = (category === "All"
    ? lensVerses
    : lensVerses.filter((verse) => verse.category === category))
    .filter((verse) => matchesLensVerse(verse));

  if (!subset.length) {
    renderEmptyState(verseCards, "No verse references matched your search and filter.");
    return;
  }

  subset.forEach((verse) => {
    const node = verseTemplate.content.cloneNode(true);
    const card = node.querySelector(".verse-card");

    setHighlightedText(card.querySelector(".verse-tag"), verse.category);
    card
      .querySelector(".reference-list")
      .appendChild(createPassageDetail(verse.reference, verse.passage));

    verseCards.appendChild(node);
  });
}

function buildComparisonItems(toneKey) {
  const coreItems = argumentsData.map((entry) => ({
    type: "Core Challenge",
    title: entry.title,
    claim: entry.tones[toneKey].claim,
    response: entry.tones[toneKey].logic,
    references: entry.references
  }));

  const proofItems = proofTextsData.map((entry) => ({
    type: "Proof-Text",
    title: entry.title,
    claim: entry.claim,
    response: entry.tones[toneKey],
    references: entry.references
  }));

  const replyItems = commonRepliesData.map((entry) => ({
    type: "Common Reply",
    title: entry.title,
    claim: entry.claim,
    response: entry.tones[toneKey],
    references: entry.references
  }));

  const drilldownItems = objectionDrilldownData.flatMap((entry) =>
    entry.steps.map((step) => ({
      type: "Objection Drilldown",
      title: `${entry.title} - ${step.layer}`,
      claim: step.calvinistReply,
      response: step.counterResponse,
      references: step.references.map((reference) => ({
        reference,
        passage: lookupPassage(reference)
      }))
    }))
  );

  return [...coreItems, ...proofItems, ...replyItems, ...drilldownItems];
}

function renderComparison(toneKey) {
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

  items.forEach((entry) => {
    const node = comparisonTemplate.content.cloneNode(true);
    const card = node.querySelector(".compare-card");

    setHighlightedText(card.querySelector(".compare-type"), entry.type);
    setHighlightedText(card.querySelector(".compare-title"), entry.title);
    setHighlightedText(card.querySelector(".compare-claim"), entry.claim);
    setHighlightedText(card.querySelector(".compare-response"), entry.response);

    const referenceList = card.querySelector(".reference-list");
    entry.references.forEach((verse) => {
      referenceList.appendChild(createPassageDetail(verse.reference, verse.passage));
    });

    comparisonGrid.appendChild(node);
  });
}

function renderAllForTone(toneKey) {
  renderToneHeader(toneKey);
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
  renderDrilldown(toneKey);
  renderContextViewer();
  renderLogicSummary(toneKey);
  renderComparison(toneKey);
}

toneSelect.addEventListener("change", (event) => {
  currentTone = event.target.value;
  renderAllForTone(currentTone);
});

searchInput.addEventListener("input", (event) => {
  currentSearchQuery = event.target.value.trim().toLowerCase();
  renderVerseCards(currentCategory);
  renderAllForTone(currentTone);
});

searchClear.addEventListener("click", () => {
  currentSearchQuery = "";
  searchInput.value = "";
  searchInput.focus();
  renderVerseCards(currentCategory);
  renderAllForTone(currentTone);
});

glossaryInput.addEventListener("input", (event) => {
  currentGlossaryQuery = event.target.value.trim().toLowerCase();
  renderGlossary();
});

glossaryClear.addEventListener("click", () => {
  currentGlossaryQuery = "";
  glossaryInput.value = "";
  glossaryInput.focus();
  renderGlossary();
});

contextSelect.addEventListener("change", (event) => {
  currentContextReference = event.target.value;
  renderContextViewer();
});

tabStudy.addEventListener("click", () => {
  setView("study");
});

tabCompare.addEventListener("click", () => {
  setView("compare");
});

renderFilters();
renderComparisonFilters();
renderVerseCards(currentCategory);
renderAllForTone(currentTone);
setView(currentView);
