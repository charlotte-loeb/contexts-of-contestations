***Contexts of Contestation: Analytical Code***

* Author: [blinded]
* This Version: 27 October 2022

/*Note: Make sure to change working directory (using -cd- cmd) to folder containing	data before running code.*/

version 17
set more off
capture log close
log using contexts_an, replace

* Set graph environment
set scheme plotplain

******** M1: Full models for each DV measured on level of clustered observations ********


***Item-level outcomes***
	* count: relnum_detailed [actor inclusiveness] justfreq [justification]
	* binary: oppospos [idea inclusiveness]

* Read in data
use contexts_cr1_item.dta, clear

* L1M1: relnum_detailed justfreq oppospos
mepoisson justfreq i.polsys i.socdiv i.mediatype || source_id: , intpoints(7)
coefplot, drop(_cons) xline(0) title(Religious multiperspectivalness) // Fig 4


mepoisson relnum_detailed i.polsys i.socdiv i.mediatype || source_id: , intpoints(7)
coefplot, drop(_cons) xline(0) title(Religious multiperspectivalness) // Fig 2

melogit oppospos i.polsys i.socdiv i.mediatype if oppospos != 99 || source_id: , intpoints(7)
coefplot, drop(_cons) xline(0) title(Opposing positions) // Fig 3

***Actor-level outcomes***
	* binary: civsoc citizen expert oppospeak_polintnat [all: actor inclusiveness] 

* Read in data
use contexts_cr1_actor.dta, clear

* M1: civsoc citizen expert oppospeak_polintnat
foreach X of varlist civsoc citizen expert oppospeak_polintnat {
	melogit `X' i.polsys i.socdiv i.mediatype || source_id: || text_id: , intpoints(7)
	estat icc	// calculate item-level ICC
	estat ic	// calculate LL and AIC
	display e(ll) * -2	// calculate -2LL
	estimates store `X'
}

* Plotting model coefficient estimates as subgraphs
coefplot civsoc, bylabel(Civil society) ///
	|| citizen, bylabel(Citizen) ///
	|| expert, bylabel(Expert) ///
	|| oppospeak_polintnat, bylabel(Opposition speaker) ///
	||, drop(_cons) xline(0) name(coefactinclactlev, replace) // Fig 1


***Justification-level outcome***
	* multinomial/ordinal: just_dqi_ref [justification]

* Read in data
use contexts_cr1_just.dta, clear

* M1: just_dqi_ref
meologit just_dqi_ref i.polsys i.socdiv i.mediatype if just_dqi_ref != 0 ||  source_id: || text_id: , intpoints(7) // w/o rechtf_position_1_id (to allow estimation) [theoretically: preferred, given importance of outlet for just qual]

coefplot, drop(_cons) xline(0) title(Justification types (DQI)) // Fig 5

clear all

log close
exit
