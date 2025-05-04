# utils.py

def skill_tokenizer(skills):
    if isinstance(skills, str):
        return [skill.strip().title() for skill in skills.split(",")]
    return []
