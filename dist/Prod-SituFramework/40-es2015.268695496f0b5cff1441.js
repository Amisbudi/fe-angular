(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{Z9S3:function(t,e,s){"use strict";s.r(e);var a=s("8Y7J");class n{}var r=s("pMnS"),i=s("+5tu"),o=s("G0yt"),p=s("L21D"),c=s("JobP"),h=s("TSSN"),l=s("U2d/"),u=s("Rv+X"),g=s("geuY"),m=(s("oTcB"),s("XNiG"));class d{constructor(t,e,s,a){this.translateService=t,this.broadcasterService=e,this.chartService=s,this.userService=a,this.dtOptions=[],this.dtTrigger=new m.a,this.dtTrigger1=new m.a,this.dtTrigger2=new m.a,this.dtTrigger3=new m.a,this.dtTrigger4=new m.a,this.dtTrigger5=new m.a,this.dtTrigger6=new m.a,this.dtTriggerKota=new m.a,this.dtTriggerSchool=new m.a,t.setDefaultLang(localStorage.getItem("lang")),e.changeLangBroadcast$.subscribe(e=>{t.setDefaultLang(e.lang)}),this.programActive=0,this.selectionPathActive=0,this.loader=!1,this.loading=!1,this.loadtableCityParticipant=!1,this.isMoreThanOneData=!1,this.selectedSelectionPathParticipant=""}ngOnInit(){this.loadProfile()}loadProfile(){this.userData=JSON.parse(localStorage.getItem("userProfile")),this.userData.username.includes("@")?(this.userType=0,this.loading=!0,this.userService.getParticipantDetailData(this.userData.email).subscribe(t=>{this.userService.getRegistrationListParticipantData(`participant_id=${t.participant_id}`).subscribe(t=>{0!=t.data.length?(this.participantFlag=1,this.loading=!1):(this.participantFlag=0,this.loading=!1)})})):this.userType=1}gotoAdmissionDashboard(){window.open("https://dev-fe.trisakti.ac.id/dashboard/login","_blank")}}var _=a["\u0275crt"]({encapsulation:0,styles:[["td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{table-layout:fixed;word-wrap:break-word;white-space:pre-wrap}.center-table[_ngcontent-%COMP%]{text-align:center}.center-text[_ngcontent-%COMP%]{display:-webkit-inline-box;display:inline-flex;text-align:center}"]],data:{}});function U(t){return a["\u0275vid"](0,[a["\u0275qud"](671088640,1,{dtElements:1}),(t()(),a["\u0275eld"](1,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(t()(),a["\u0275eld"](2,0,null,null,10,"div",[["class","col-12"]],null,null,null,null,null)),(t()(),a["\u0275eld"](3,0,null,null,9,"app-card",[["blockClass","text-center"]],null,null,null,i.b,i.a)),a["\u0275prd"](512,null,o.u,o.u,[]),a["\u0275did"](5,114688,null,0,p.a,[c.a,h.j,l.AnimationService,o.u],{loading:[0,"loading"],blockClass:[1,"blockClass"],hidHeader:[2,"hidHeader"]},null),(t()(),a["\u0275eld"](6,0,null,1,2,"h6",[["class","text-center"]],null,null,null,null,null)),(t()(),a["\u0275ted"](7,null,["",""])),a["\u0275pid"](131072,h.i,[h.j,a.ChangeDetectorRef]),(t()(),a["\u0275eld"](9,0,null,1,3,"button",[["class","btn btn-primary btn-sm btn-round has-ripple"]],null,[[null,"click"]],(function(t,e,s){var a=!0;return"click"===e&&(a=!1!==t.component.gotoAdmissionDashboard()&&a),a}),null,null)),(t()(),a["\u0275eld"](10,0,null,null,0,"i",[["class","icofont icofont-bars"]],null,null,null,null,null)),(t()(),a["\u0275ted"](11,null,[" "," "])),a["\u0275pid"](131072,h.i,[h.j,a.ChangeDetectorRef])],(function(t,e){t(e,5,0,e.component.loader,"text-center",!0)}),(function(t,e){t(e,7,0,a["\u0275unv"](e,7,0,a["\u0275nov"](e,8).transform("CONTENT.dashboard"))),t(e,11,0,a["\u0275unv"](e,11,0,a["\u0275nov"](e,12).transform("CONTENT.go-to-admision-dashboard")))}))}function D(t){return a["\u0275vid"](0,[(t()(),a["\u0275eld"](0,0,null,null,1,"app-adm-dashboard",[],null,null,null,U,_)),a["\u0275did"](1,114688,null,0,d,[h.j,c.a,u.a,g.a],null,null)],(function(t,e){t(e,1,0)}),null)}var b=a["\u0275ccf"]("app-adm-dashboard",d,D,{},{},[]),y=s("rMcs"),f=s("W8s6"),w=s("9AJC"),P=s("SVse"),S=s("s7LF"),v=s("luWi"),C=s("0NUV"),k=s("DoSW"),R=s("w3tH"),M=s("PCNd"),T=s("IheW"),x=s("JWsB"),L=s("vnZu"),N=s("jsIy"),F=s("CLta"),E=s("iInd");class I{}var A=s("1zHf"),O=s("bse0"),W=s("OvsO"),j=s("IcD6"),H=s("JT55"),z=s("s7Le"),B=s("iphE"),G=s("22Na"),J=s("iAM3"),V=s("GXqH"),q=s("axVG"),Y=s("wMD3"),Q=s("mB+Y");s.d(e,"AdmDashboardModuleNgFactory",(function(){return K}));var K=a["\u0275cmf"](n,[],(function(t){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,b,y.a,f.a,w.g,w.a]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,P.NgLocalization,P.NgLocaleLocalization,[a.LOCALE_ID,[2,P["\u0275angular_packages_common_common_a"]]]),a["\u0275mpd"](4608,S["\u0275angular_packages_forms_forms_o"],S["\u0275angular_packages_forms_forms_o"],[]),a["\u0275mpd"](4608,S.FormBuilder,S.FormBuilder,[]),a["\u0275mpd"](4608,l.AnimationService,l.AnimationService,[]),a["\u0275mpd"](4608,v.LightboxConfig,v.LightboxConfig,[]),a["\u0275mpd"](4608,C.LightboxEvent,C.LightboxEvent,[]),a["\u0275mpd"](4608,k.Lightbox,k.Lightbox,[a.ComponentFactoryResolver,a.Injector,a.ApplicationRef,v.LightboxConfig,C.LightboxEvent]),a["\u0275mpd"](4608,C.LightboxWindowRef,C.LightboxWindowRef,[]),a["\u0275mpd"](4608,R.a,R.a,[]),a["\u0275mpd"](5120,R.c,R.d,[R.a]),a["\u0275mpd"](5120,h.f,M.a,[T.c]),a["\u0275mpd"](4608,h.c,h.e,[]),a["\u0275mpd"](4608,h.h,h.d,[]),a["\u0275mpd"](4608,h.b,h.a,[]),a["\u0275mpd"](4608,h.k,h.k,[]),a["\u0275mpd"](4608,h.j,h.j,[h.k,h.f,h.c,h.h,h.b,h.l,h.m]),a["\u0275mpd"](4608,x.a,x.a,[]),a["\u0275mpd"](4608,L.a,L.a,[]),a["\u0275mpd"](4608,N.a,N.a,[]),a["\u0275mpd"](4608,F.b,F.b,[]),a["\u0275mpd"](1073742336,P.CommonModule,P.CommonModule,[]),a["\u0275mpd"](1073742336,E.s,E.s,[[2,E.x],[2,E.o]]),a["\u0275mpd"](1073742336,I,I,[]),a["\u0275mpd"](1073742336,S["\u0275angular_packages_forms_forms_d"],S["\u0275angular_packages_forms_forms_d"],[]),a["\u0275mpd"](1073742336,S.FormsModule,S.FormsModule,[]),a["\u0275mpd"](1073742336,A.b,A.b,[]),a["\u0275mpd"](1073742336,O.d,O.d,[]),a["\u0275mpd"](1073742336,S.ReactiveFormsModule,S.ReactiveFormsModule,[]),a["\u0275mpd"](1073742336,W.a,W.a,[]),a["\u0275mpd"](1073742336,o.w,o.w,[]),a["\u0275mpd"](1073742336,j.AnimatorModule,j.AnimatorModule,[]),a["\u0275mpd"](1073742336,H.a,H.a,[]),a["\u0275mpd"](1073742336,z.a,z.a,[]),a["\u0275mpd"](1073742336,B.a,B.a,[]),a["\u0275mpd"](1073742336,G.ClickOutsideModule,G.ClickOutsideModule,[]),a["\u0275mpd"](1073742336,J.LightboxModule,J.LightboxModule,[]),a["\u0275mpd"](1073742336,V.a,V.a,[]),a["\u0275mpd"](1073742336,h.g,h.g,[]),a["\u0275mpd"](1073742336,M.b,M.b,[]),a["\u0275mpd"](1073742336,q.a,q.a,[]),a["\u0275mpd"](1073742336,o.g,o.g,[]),a["\u0275mpd"](1073742336,o.ab,o.ab,[]),a["\u0275mpd"](1073742336,o.r,o.r,[]),a["\u0275mpd"](1073742336,Y.a,Y.a,[]),a["\u0275mpd"](1073742336,Q.a,Q.a,[]),a["\u0275mpd"](1073742336,F.a,F.a,[]),a["\u0275mpd"](1073742336,n,n,[]),a["\u0275mpd"](1024,E.m,(function(){return[[{path:"",component:d}]]}),[]),a["\u0275mpd"](256,h.m,void 0,[]),a["\u0275mpd"](256,h.l,void 0,[]),a["\u0275mpd"](256,O.a,M.c,[]),a["\u0275mpd"](256,S.COMPOSITION_BUFFER_MODE,!1,[])])}))},geuY:function(t,e,s){"use strict";s.d(e,"a",(function(){return p}));var a=s("2NL2"),n=s("3nF+"),r=s("8Y7J"),i=s("IheW"),o=s("iInd");let p=(()=>{class t extends n.a{constructor(t,e){super(t),this.router=e,this.namespace="participant",this.tokenFactory=new a.a}postRegistrationData(t){const e=this.getUrl(this.namespace,"register_account");return this.http.post(e,t)}postEmailConfirmationData(t){const e=this.getUrl(this.namespace,"send_email_conf");return this.http.post(e,t)}postResetPassword(t,e){const s=this.getUrl(this.namespace,"cr_reset_password",t);return this.http.post(s,e)}postForgotPassword(t){const e=this.getUrl(this.namespace,"forgot_password");return this.http.post(e,t)}getParticipantDetailData(t){const e=this.getUrl(this.namespace,"re_participant_detail",t);return this.http.get(e)}postParticipantDetailData(t){const e=this.getUrl(this.namespace,"up_participant_detail");return this.http.post(e,t)}getReligionData(){const t=this.getUrl(this.namespace,"re_religion");return this.http.get(t)}getMarriageStatusData(){const t=this.getUrl(this.namespace,"re_marriage_status");return this.http.get(t)}getCountryData(){const t=this.getUrl(this.namespace,"re_country");return this.http.get(t)}getProvinceData(t){const e=this.getUrl(this.namespace,"re_province",t);return this.http.get(e)}getDistrictData(t){const e=this.getUrl(this.namespace,"re_district",t);return this.http.get(e)}getEducationHistoryData(t){const e=this.getUrl(this.namespace,"re_education_history",t);return this.http.get(e)}postEducationHistoryData(t){const e=this.getUrl(this.namespace,"cr_education_history");return this.http.post(e,t)}updEducationHistoryData(t){const e=this.getUrl(this.namespace,"up_education_history");return this.http.post(e,t)}deleteEducationHistoryData(t){const e=this.getUrl(this.namespace,"del_education_history");return this.http.post(e,t)}getParentsData(t){const e=this.getUrl(this.namespace,"re_family_parents",t);return this.http.get(e)}postParentsData(t){const e=this.getUrl(this.namespace,"cr_family_parents");return this.http.post(e,t)}deleteParentsData(t){const e=this.getUrl(this.namespace,"del_family_parents");return this.http.post(e,t)}updParentsData(t){const e=this.getUrl(this.namespace,"up_family_parents");return this.postApiPlain(e,t)}getSiblingsData(t){const e=this.getUrl(this.namespace,"re_family_siblings",t);return this.http.get(e)}getWorkHistoryData(t){const e=this.getUrl(this.namespace,"re_work_history",t);return this.http.get(e)}postWorkHistoryData(t){const e=this.getUrl(this.namespace,"cr_work_history");return this.http.post(e,t)}updWorkHistoryData(t){const e=this.getUrl(this.namespace,"up_work_history");return this.http.post(e,t)}deleteWorkHistoryData(t){const e=this.getUrl(this.namespace,"del_work_history");return this.http.post(e,t)}getPersonalDocumentData(t){const e=this.getUrl(this.namespace,"re_personal_document",t);return this.http.get(e)}postPersonalDocumentData(t){const e=this.getUrl(this.namespace,"cr_personal_document");return this.http.post(e,t)}updPersonalDocumentData(t){const e=this.getUrl(this.namespace,"up_doc_participant");return this.http.post(e,t)}deletePersonalDocumentData(t){const e=this.getUrl(this.namespace,"del_personal_document");return this.http.post(e,t)}getEducationDegreeData(){const t=this.getUrl(this.namespace,"re_education_degree");return this.http.get(t)}getFamilyRelationshipData(t){const e=this.getUrl(this.namespace,"re_family_relation",t);return this.http.get(e)}getWorkFieldData(){const t=this.getUrl(this.namespace,"re_work_field");return this.http.get(t)}getWorkTypeData(t){const e=this.getUrl(this.namespace,"re_work_type",t);return this.http.get(e)}getIncomeRangeData(){const t=this.getUrl(this.namespace,"re_income_range");return this.http.get(t)}getSchoolData(t){const e=this.getUrl(this.namespace,"re_school",t);return this.http.get(e)}getSchoolMajorData(){const t=this.getUrl(this.namespace,"re_school_major");return this.http.get(t)}getRegistrationListParticipantData(t){const e=this.getUrl(this.namespace,"re_registration",t);return this.http.get(e)}postStudyProgramRegistrationData(t){const e=this.getUrl(this.namespace,"cr_study_program_reg");return this.http.post(e,t)}updStudyProgramRegistrationData(t){const e=this.getUrl(this.namespace,"up_study_program_reg");return this.http.post(e,t)}delStudyProgramRegistrationData(t){const e=this.getUrl(this.namespace,"del_study_program_reg");return this.http.post(e,t)}postRegistrationDetailData(t){const e=this.getUrl(this.namespace,"cr_registration");return this.http.post(e,t)}getReportCardData(t){const e=this.getUrl(this.namespace,"re_doc_report_card",t);return this.http.get(e)}postDocumentReportCardData(t){const e=this.getUrl(this.namespace,"cr_doc_report_card");return this.http.post(e,t)}updDocumentReportCardData(t){const e=this.getUrl(this.namespace,"up_doc_report_card");return this.http.post(e,t)}deleteReportCard(t){const e=this.getUrl(this.namespace,"del_doc_report_card");return this.http.post(e,t)}getDocumentCertificateData(t){const e=this.getUrl(this.namespace,"re_doc_certificate",t);return this.http.get(e)}postDocumentCertificateData(t){const e=this.getUrl(this.namespace,"cr_doc_certificate");return this.http.post(e,t)}updDocumentCertificateData(t){const e=this.getUrl(this.namespace,"up_doc_certificate");return this.http.post(e,t)}deleteDocumentCertificate(t){const e=this.getUrl(this.namespace,"del_doc_certificate");return this.http.post(e,t)}getDocumentSupportingData(t){const e=this.getUrl(this.namespace,"re_doc_supporting",t);return this.http.get(e)}postDocumentSupportingData(t){const e=this.getUrl(this.namespace,"cr_doc_supporting");return this.http.post(e,t)}updDocumentSupportingData(t){const e=this.getUrl(this.namespace,"up_doc_supporting");return this.http.post(e,t)}deleteDocumentSupportingData(t){const e=this.getUrl(this.namespace,"del_doc_supporting");return this.http.post(e,t)}getSemesterData(){const t=this.getUrl(this.namespace,"re_semester");return this.http.get(t)}getRangeScoreData(){const t=this.getUrl(this.namespace,"re_range");return this.http.get(t)}getCertificateLevelData(){const t=this.getUrl(this.namespace,"re_certificate_level");return this.http.get(t)}getCertificateTypeData(){const t=this.getUrl(this.namespace,"re_certificate_type");return this.http.get(t)}getSelectionPathData(t){const e=this.getUrl(this.namespace,"re_selection_path",t);return this.http.get(e)}getActiveQuestionnaireData(t){const e=this.getUrl(this.namespace,"re_active_questionnaire",t);return this.http.get(e)}getStatusQuestionnaireData(t){const e=this.getUrl(this.namespace,"re_status_questionnaire",t);return this.http.get(e)}postRegistrationHistoryData(t){const e=this.getUrl(this.namespace,"cr_registration_history");return this.http.post(e,t)}postAnswerQuestionData(t){const e=this.getUrl(this.namespace,"cr_answer_question");return this.http.post(e,t)}getRegistrationCard(t){const e=this.getUrl(this.namespace,"pr_registration_card",t);return this.http.get(e)}getRegistrationHistory(t){const e=this.getUrl(this.namespace,"re_registration_history",t);return this.http.get(e)}getDocumentParticipantStatus(t){const e=this.getUrl(this.namespace,"re_doc_participant_status",t);return this.http.get(e)}deleteMappingStudyProgram(t){const e=this.getUrl(this.namespace,"del_mapping_study_program");return this.http.post(e,t)}deleteRegistrationSteps(t){const e=this.getUrl(this.namespace,"del_registration_history_steps");return this.http.post(e,t)}getSofId(t){const e=this.getUrl(this.namespace,"re_sofId",t);return this.http.get(e)}getPinTransaction(t){const e=this.getUrl(this.namespace,"re_pin_transaction",t);return this.http.get(e)}getStatusPinTransaction(t){const e=this.getUrl(this.namespace,"re_status_pin_transaction",t);return this.http.get(e)}getTransactionVoucher(t){const e=this.getUrl(this.namespace,"re_transaction_voucher",t);return this.http.get(e)}postPinTransaction(t){const e=this.getUrl(this.namespace,"cr_pin_transaction");return this.http.post(e,t)}postTransactionWithVoucher(t){const e=this.getUrl(this.namespace,"cr_transaction_voucher");return this.http.post(e,t)}getExamSession(t){const e=this.getUrl(this.namespace,"re_exam_session",t);return this.http.get(e)}getCheckEducationMajor(t){const e=this.getUrl(this.namespace,"re_check_technic_major",t);return this.http.get(e)}getGenerateExamPassLetter(t){const e=this.getUrl(this.namespace,"re_generate_exam_pass_letter",t);return this.http.get(e)}postAnswerQuistionnaire(t){const e=this.getUrl(this.namespace,"cr_answer_questionnaire");return this.http.post(e,t)}getDocumentRequirementRaport(t){const e=this.getUrl(this.namespace,"re_registration_doc_raport",t);return this.http.get(e)}getValidateSelectionProgram(t){const e=this.getUrl(this.namespace,"re_validate_participant_with_program_and_path",t);return this.http.get(e)}getDocumentStudy(t){const e=this.getUrl(this.namespace,"re_document_study",t);return this.http.get(e)}getStudyProgramSpecialization(t){const e=this.getUrl(this.namespace,"re_study_program_specialization",t);return this.http.get(e)}postDocumentStudy(t){const e=this.getUrl(this.namespace,"cr_document_study");return this.http.post(e,t)}updDocumentStudy(t){const e=this.getUrl(this.namespace,"up_document_study");return this.http.post(e,t)}deleteDocumentStudy(t){const e=this.getUrl(this.namespace,"del_document_study");return this.http.post(e,t)}getPaymentMethodParticipant(t){const e=this.getUrl(this.namespace,"re_payment_method_check",t);return this.http.get(e)}getDocumentRecommendation(t){const e=this.getUrl(this.namespace,"re_document_recommendation",t);return this.http.get(e)}postDocumentRecommendation(t){const e=this.getUrl(this.namespace,"cr_document_recommendation");return this.http.post(e,t)}postSendUrlRecommendation(t){const e=this.getUrl(this.namespace,"cr_url_recommendation");return this.http.post(e,t)}getDetailRecommendation(t){const e=this.getUrl(this.namespace,"re_detail_recommendation",t);return this.http.get(e)}getPostGraduate(t){const e=this.getUrl(this.namespace,"get_postgraduate",t);return this.http.get(e)}updDocumentRecommendation(t){const e=this.getUrl(this.namespace,"up_document_recommendation");return this.http.post(e,t)}postDocumentProposal(t){const e=this.getUrl(this.namespace,"cr_document_proposal");return this.http.post(e,t)}updDocumentProposal(t){const e=this.getUrl(this.namespace,"up_document_proposal");return this.http.post(e,t)}deleteDocumentProposal(t){const e=this.getUrl(this.namespace,"del_document_proposal");return this.http.post(e,t)}getStudyProgramSpecializationName(t){const e=this.getUrl(this.namespace,"get_specialization_name",t);return this.http.get(e)}getClassPasca(t){const e=this.getUrl(this.namespace,"get_classtype_specialization",t);return this.http.get(e)}getRaportSemesters(t){const e=this.getUrl(this.namespace,"get_raport_semesters",t);return this.http.get(e)}getSpecializationName(t){const e=this.getUrl(this.namespace,"get_specialization_name",t);return this.http.get(e)}getClasstypeSpecialization(t){const e=this.getUrl(this.namespace,"get_classtype_specialization",t);return this.http.get(e)}getUtbkDocument(t){const e=this.getUrl(this.namespace,"get_utbk_document",t);return this.http.get(e)}postUtbkDocument(t){const e=this.getUrl(this.namespace,"cr_utbk_document");return this.http.post(e,t)}updUtbkdocument(t){const e=this.getUrl(this.namespace,"up_utbk_document");return this.http.post(e,t)}postTranscriptDocument(t){const e=this.getUrl(this.namespace,"cr_transcript_document");return this.http.post(e,t)}delTranscriptDocument(t){const e=this.getUrl(this.namespace,"del_transcript_document");return this.http.post(e,t)}getTranscriptDocumentDetails(t){const e=this.getUrl(this.namespace,"re_transcript_document_details",t);return this.http.get(e)}getTranscriptDocument(t){const e=this.getUrl(this.namespace,"re_transcript_document",t);return this.http.get(e)}getAverageParticipantRaportCard(t){const e=this.getUrl(this.namespace,"re_average_participant_raport_card",t);return this.http.get(e)}postParticipantGrade(t){const e=this.getUrl(this.namespace,"cr_average_participant_raport_card");return this.http.post(e,t)}getStudyProgramWithPin(t){const e=this.getUrl(this.namespace,"re_study_programs_with_pin",t);return this.http.get(e)}getGroupWithPathExamDetails(t){const e=this.getUrl(this.namespace,"re_group_with_path_exam_detail",t);return this.http.get(e)}postMoodleUser(t){const e=this.getUrl(this.namespace,"cr_moodle_user");return this.http.post(e,t)}postMoodleMember(t){const e=this.getUrl(this.namespace,"cr_moodle_member");return this.http.post(e,t)}postMoodleEnrollment(t){const e=this.getUrl(this.namespace,"cr_moodle_enrolment");return this.http.post(e,t)}getValidateParticipantWithSelectionPath(t){const e=this.getUrl(this.namespace,"re_validate_participant_with_selection_path",t);return this.http.get(e)}postDocumentPublication(t){const e=this.getUrl(this.namespace,"cr_document_publication");return this.http.post(e,t)}updDocumentPublication(t){const e=this.getUrl(this.namespace,"up_document_publication");return this.http.post(e,t)}getDocumentPublication(t){const e=this.getUrl(this.namespace,"re_document_publication",t);return this.http.get(e)}deleteDocumentPublication(t){const e=this.getUrl(this.namespace,"del_document_publication");return this.http.post(e,t)}getPublicationPositionList(){const t=this.getUrl(this.namespace,"re_publication_position");return this.http.get(t)}getPublicationTypeList(){const t=this.getUrl(this.namespace,"re_publication_type");return this.http.get(t)}getNewStudentRegistration(t){const e=this.getUrl(this.namespace,"get_new_student_data",t);return this.http.get(e)}getTableDocumentDummy(){const t=this.getUrl(this.namespace,"get_new_student_document");return this.http.get(t)}getParticipantDataInformation(t){const e=this.getUrl(this.namespace,"get_participant_detail",t);return this.http.get(e)}createMappingNewStudentStep(t){const e=this.getUrl(this.namespace,"cr_mapping_new_student_step");return this.http.post(e,t)}getPartcipantNewstudent(t){const e=this.getUrl(this.namespace,"get_new_student_participant",t);return this.http.get(e)}updateParticipantNewStudent(t){const e=this.getUrl(this.namespace,"up_new_student_participant");return this.http.post(e,t)}getFamilyNewstudent(t){const e=this.getUrl(this.namespace,"get_relationship_participant",t);return this.http.get(e)}updateFamilyNewStudent(t){const e=this.getUrl(this.namespace,"up_relationship_participant");return this.http.post(e,t)}getNewStudentDocument(t){const e=this.getUrl(this.namespace,"get_newstudent_document",t);return this.http.get(e)}updateDocumentNewStudent(t){const e=this.getUrl(this.namespace,"up_doc_new_student_participant");return this.http.post(e,t)}getNewStudentDocumentStatus(t){const e=this.getUrl(this.namespace,"get_new_student_doc_status",t);return this.http.get(e)}createBillingNewStudent(t){const e=this.getUrl(this.namespace,"cr_billing_new_student");return this.http.post(e,t)}}return t.ngInjectableDef=r["\u0275\u0275defineInjectable"]({factory:function(){return new t(r["\u0275\u0275inject"](i.c),r["\u0275\u0275inject"](o.o))},token:t,providedIn:"root"}),t})()},oTcB:function(t,e,s){"use strict";s("K+Kt"),s("axVG")}}]);