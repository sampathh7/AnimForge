import streamlit as st
import streamlit.components.v1 as components
from pathlib import Path

st.set_page_config(layout="wide")
html = Path("animforge/animforge-standalone.html").read_text(encoding="utf-8")
components.html(html, height=900, scrolling=True)
