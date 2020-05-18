import React from 'react';
import Animal from './animalcare';
import Aromatherapy from './aromatherapy';
import Autism from './autism';
import BeautyTherapy from './beautytherapy';
import BusinessMarketing from './businessmarketing';
import CBT from './cbt';
import Counselling from './counselling';
import DietNutrition from './dietnutrition';
import EnergyHealing from './energyhealing';
import Fitness from './fitness';
import History from './history';
import HobbyCraft from './hobbycraft';
import HolisticTherapy from './holistictherapy';
import Hypnotherapy from './hypnotherapy';
import LifeCoaching from './lifecoaching';
import Massage from './massage';
import Mindfulness from './mindfulness';
import NlpPractitioner from './nlppractitioner';
import Phsychology from './phsychology';
import PsychicDevelopment from './psychicdevelopment';
import Psychology from './psychology';
import Reflexology from './reflexology';
import Reiki from './reiki';
import SelfHelpAudioBooks from './selfhelpaudiobooks';
import Writing from './writing';

const matching = {
  'animal-care-courses': Animal,
  'aromatherapy-courses': Aromatherapy,
  'autism-special-needs-courses': Autism,
  'beauty-therapy-courses': BeautyTherapy,
  'business-marketing-pr-courses': BusinessMarketing,
  'cbt-courses': CBT,
  'counselling-courses': Counselling,
  'diet-nutrition-courses': DietNutrition,
  'energy-healing-courses': EnergyHealing,
  'fitness-courses': Fitness,
  'history-courses': History,
  'hobby-craft-courses': HobbyCraft,
  'holistic-therapy-courses': HolisticTherapy,
  'hypnotherapy-courses': Hypnotherapy,
  'life-coaching-courses': LifeCoaching,
  'massage-courses': Massage,
  'mindfulness-courses': Mindfulness,
  'nlp-practitioner-courses': NlpPractitioner,
  'phsychology-courses': Phsychology,
  'psychic-development-courses': PsychicDevelopment,
  'psychology-courses': Psychology,
  'reflexology-courses': Reflexology,
  'reiki-courses': Reiki,
  'self-help-audio-books': SelfHelpAudioBooks,
  'writing-courses': Writing,
};

const SvgCategory = ({courseName, size, color}) => {
  const SVG = matching[courseName];
  return <SVG size={size} color={color} />;
};

export default SvgCategory;
