#!/usr/bin/env sh
# Pre-publish check: fails if placeholders remain or banned terms slipped in.
cd "$(dirname "$0")"
fail=0
if grep -rn '\[\[' --include=*.html . ; then echo "ERRO: placeholders [[...]] pendentes"; fail=1; fi
if grep -rniE 'argusstore|patent|trusted by|ai-powered|revolutionary|surveillance|by default' --include=*.html . ; then echo "ERRO: termo proibido"; fail=1; fi
[ $fail -eq 0 ] && echo "OK"
exit $fail
